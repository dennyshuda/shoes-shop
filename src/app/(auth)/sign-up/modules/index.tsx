import SignUpForm from "./SignUpForm";

const SignUp = () => {
	return (
		<section className="flex flex-col justify-center items-center pt-36">
			<div>
				<section className="mb-5">
					<h1 className="font-bold text-2xl">Daftar Sekarang</h1>
				</section>

				<SignUpForm />
			</div>
		</section>
	);
};

export default SignUp;
