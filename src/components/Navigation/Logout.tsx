import { destroySession } from "@/app/(auth)/sign-up/action";
import Button from "@/components/ui/Button";

const Logout = () => {
	return (
		<form action={destroySession}>
			<Button>Logout</Button>
		</form>
	);
};

export default Logout;
