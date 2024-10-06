import Link from "next/link";
import { BsBoxSeam } from "react-icons/bs";
import { IoPersonCircleOutline, IoPersonOutline } from "react-icons/io5";
import Logout from "./Logout";
import User from "./User";

const NavUser = () => {
	return (
		<nav className="w-80">
			<h1 className="font-bold text-2xl">My Profile</h1>

			<div className="flex gap-3 items-center my-5">
				<IoPersonCircleOutline size={40} />

				<User />
			</div>

			<ul className="pl-5">
				<Link href="/user" className="flex gap-2 items-center py-5">
					<IoPersonOutline size={20} />
					<span>Personal Information</span>
				</Link>
				<Link href="/user/order" className="flex gap-2 items-center py-5">
					<BsBoxSeam size={20} />
					<span>My Orders</span>
				</Link>

				<Logout />
			</ul>
		</nav>
	);
};

export default NavUser;
