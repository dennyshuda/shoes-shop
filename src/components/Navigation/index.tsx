import Link from "next/link";
import Container from "@/components/common/Container";
import NavMenu from "./NavMenu";

const Navigation = () => {
	return (
		<nav className="py-5">
			<Container>
				<section className="flex justify-between">
					<Link href="/" className="font-bold text-xl">
						SepatuBox
					</Link>

					<NavMenu />
				</section>
			</Container>
		</nav>
	);
};

export default Navigation;
