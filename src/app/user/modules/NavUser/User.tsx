import { getSession } from "@/lib/auth/action";

const User = async () => {
	const session = await getSession();

	return (
		<div>
			<h3 className="font-bold">{session.fullname}</h3>
			<h4>{session.email}</h4>
		</div>
	);
};

export default User;
