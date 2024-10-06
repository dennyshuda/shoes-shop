import Link from "next/link";
import ShoppingCart from "./ShoppingCart";
import { getSession } from "@/lib/auth/action";

const NavMenu = async () => {
	const session = await getSession();

	return (
		<ul className="flex items-center gap-3 text-gray-600">
			<Link href="/">Home</Link>
			<Link href="/product">Shop</Link>
			{session.isLoggedIn ? (
				<div className="flex items-center gap-3">
					<Link href="/user">My Account</Link>
					<ShoppingCart />
				</div>
			) : (
				<Link href="/sign-in" className="bg-black text-white px-3.5 py-2 rounded-md">
					Login
				</Link>
			)}
		</ul>
	);
};

export default NavMenu;
