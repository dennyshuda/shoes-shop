import Button from "@/components/ui/Button";
import { destroySession } from "@/lib/auth/action";

const Logout = () => {
	return (
		<form action={destroySession}>
			<Button>Logout</Button>
		</form>
	);
};

export default Logout;
