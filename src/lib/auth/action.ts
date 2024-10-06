"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getIronSession } from "iron-session";
import bcrypt from "bcrypt";
import { defaultSession, SessionData, sessionOptions } from "@/lib/session";
import prisma from "@/lib/prisma";
import { UserSignUpPayload } from "@/app/(auth)/sign-up/modules/SignUpForm";
import { UserSignInPayload } from "@/app/(auth)/sign-in/modules/SignInForm";

export async function getSession() {
	const session = await getIronSession<SessionData>(cookies(), sessionOptions);
	if (!session.isLoggedIn) {
		session.isLoggedIn = defaultSession.isLoggedIn;
	}
	return session;
}

export const createUser = async (formData: UserSignUpPayload) => {
	const hashedPassword = await bcrypt.hash(formData.password, 10);

	try {
		await prisma.user.create({
			data: {
				fullname: formData.fullname,
				email: formData.email,
				password: hashedPassword,
			},
		});
	} catch (error) {
		return { error: "something wrong" };
	}
};

export const createUserSession = async (formData: UserSignInPayload) => {
	const session = await getSession();
	try {
		const email = formData.email;
		const password = formData.password;
		const user = await prisma.user.findUnique({ where: { email: email } });
		if (!user) {
			return { error: "email is doesnt exist" };
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) return { error: "Password not correct" };

		session.id = user.id;
		session.fullname = user.fullname;
		session.email = user.email;
		session.isLoggedIn = true;
		await session.save();
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return { error: "something went wrong" };
	}
};

export const destroySession = async () => {
	const session = await getSession();
	session.destroy();
	revalidatePath("/sign-in");
};
