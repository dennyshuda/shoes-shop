import Container from "@/components/common/Container";
import NavUser from "./modules/NavUser";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/action";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getSession();

	if (!session.isLoggedIn) {
		redirect("/sign-in");
	}

	return (
		<Container>
			<main className="flex gap-5">
				<NavUser />

				<section>{children}</section>
			</main>
		</Container>
	);
};

export default UserLayout;
