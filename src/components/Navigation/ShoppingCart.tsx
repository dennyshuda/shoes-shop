"use client";

import { useCartStore } from "@/lib/store/cart";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useShallow } from "zustand/react/shallow";

const ShoppingCart = () => {
	const { cart } = useCartStore(useShallow((state) => ({ cart: state.cart })));

	return (
		<Link href="/cart" className="flex items-center gap-1">
			<FiShoppingBag size={20} />
			<span>({cart.length})</span>
		</Link>
	);
};

export default ShoppingCart;
