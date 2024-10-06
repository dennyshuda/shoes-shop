"use";

import { BiLogOut } from "react-icons/bi";
import Button from "@/components/ui/Button";
import { destroySession } from "@/lib/auth/action";

const Logout = () => {
	return (
		<form action={destroySession}>
			<Button type="submit" variant="secondary" className="flex gap-2 items-center py-5">
				<BiLogOut size={20} />
				<span>Logout</span>
			</Button>
		</form>
	);
};

export default Logout;
