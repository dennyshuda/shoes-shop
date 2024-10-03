"use client";

import Container from "../common/Container";
import Link from "next/link";

const Navigation = () => {
	return (
		<nav className="py-5">
			<Container>
				<section className="flex justify-between">
					<div>
						<Link href="/" className="font-bold text-xl">
							Shoes Store
						</Link>
					</div>

					<ul className="flex items-center gap-3">
						<Link href="/" className="text-gray-700">
							Home
						</Link>
						<Link href="/product" className="text-gray-700">
							Shop
						</Link>
						<Link href="/login" className="bg-black text-white px-3.5 py-2 rounded-md">
							Login
						</Link>
					</ul>
				</section>
			</Container>
		</nav>
	);
};

export default Navigation;
