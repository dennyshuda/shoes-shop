"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { createUserSession } from "@/lib/auth/action";

export type UserSignInPayload = {
	email: string;
	password: string;
};

const SignInForm = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm<UserSignInPayload>();
	const onSubmit: SubmitHandler<UserSignInPayload> = async (data) => {
		const response = await createUserSession(data);
		if (response?.error) {
			toast.error(response.error);
		} else {
			toast.success("Welcome", { duration: 2000 });
			setTimeout(() => {
				router.push("/user");
			}, 2000);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-3">
			<Input label="Email" type="email" {...register("email")} placeholder="Email" required />
			<Input
				label="Password"
				type="password"
				{...register("password")}
				placeholder="Password"
				required
			/>
			<Button type="submit">Masuk </Button>
		</form>
	);
};

export default SignInForm;
