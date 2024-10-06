import { redirect } from "next/navigation";
import Container from "@/components/common/Container";
import Product from "./modules";
import { getSession } from "@/lib/auth/action";

const ProductPage = async () => {
	const session = await getSession();

	if (!session.isLoggedIn) {
		redirect("/sign-in");
	}

	return (
		<Container>
			<Product />
		</Container>
	);
};

export default ProductPage;
