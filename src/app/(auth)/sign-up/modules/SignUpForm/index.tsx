"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { createUser } from "@/lib/auth/action";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export type UserSignUpPayload = {
	fullname: string;
	email: string;
	password: string;
};

const SignUpForm = () => {
	const router = useRouter();

	const { register, handleSubmit } = useForm<UserSignUpPayload>();
	const onSubmit: SubmitHandler<UserSignUpPayload> = async (data) => {
		const response = await createUser(data);
		if (response?.error) {
			toast.error(response.error);
		} else {
			toast.success("Success Create User", { duration: 2000 });
			setTimeout(() => {
				router.push("/sign-in");
			}, 2000);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-3">
			<Input
				label="Nama Lengkap"
				type="text"
				{...register("fullname")}
				placeholder="Nama Lengkap"
				required
			/>
			<Input label="Email" type="email" {...register("email")} placeholder="Email" required />
			<Input
				label="Password"
				type="password"
				{...register("password")}
				placeholder="Password"
				required
			/>
			<Button type="submit">Daftar</Button>
		</form>
	);
};

export default SignUpForm;
