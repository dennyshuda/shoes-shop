import SignInForm from "./SignInForm";

const SignIn = () => {
	return (
		<section className="flex flex-col justify-center items-center pt-36">
			<div>
				<section className="mb-5">
					<h1 className="font-bold text-2xl">Masuk</h1>

					<SignInForm />
				</section>
			</div>
		</section>
	);
};

export default SignIn;
