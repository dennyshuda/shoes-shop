"use client";

import Button from "@/components/ui/Button";
import { getToken } from "@/lib/midtrans/transaction";
import { useCartStore } from "@/lib/store/cart";
import { toIdr } from "@/lib/utils";
import Script from "next/script";
import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";

declare global {
	interface Window {
		snap: any;
	}
}

const Cart = () => {
	const { cart, increaseQuantity, decreaseQuantity } = useCartStore(
		useShallow((state) => ({
			cart: state.cart,
			increaseQuantity: state.increaseQuantity,
			decreaseQuantity: state.decreaseQuantity,
		}))
	);

	const calculateTotal = useMemo(() => {
		const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
		return total;
	}, [cart]);

	const handleClick = async () => {
		const token = await getToken(calculateTotal);
		const res = window.snap.pay(token);
		console.log(res);
	};

	return (
		<section>
			<Script
				src="https://app.sandbox.midtrans.com/snap/snap.js"
				data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT!}
				strategy="lazyOnload"
			/>

			<h1 className="font-bold text-2xl my-3">Keranjang</h1>

			<div className="grid grid-cols-3 text-gray-600 font-bold">
				<h3>Produk</h3>
				<h3 className="text-center">Quantity</h3>
				<h3 className="text-end">Subtotal</h3>
			</div>

			<div>
				{cart.map((c) => (
					<section key={c.id} className="grid grid-cols-3 py-5">
						<h2>{c.name}</h2>
						<div className="flex items-center justify-center gap-3">
							<button
								onClick={() => decreaseQuantity(c.id)}
								className="border-2 border-black rounded-full w-7 h-7 flex items-center justify-center"
							>
								-
							</button>
							<span>{c.quantity}</span>
							<button
								onClick={() => increaseQuantity(c.id)}
								className="border-2 border-black rounded-full w-7 h-7 flex items-center justify-center"
							>
								+
							</button>
						</div>
						<h2 className="text-end">{toIdr(c.price * c.quantity)}</h2>
					</section>
				))}
			</div>

			<div className="flex justify-end">
				<section className="space-y-3 w-96">
					<h1 className="font-bold">Ringkasan Belanja</h1>

					<div className="flex justify-between font-bold">
						<h2>PPN (10%)</h2>
						<h2>{toIdr((calculateTotal * 10) / 100)}</h2>
					</div>
					<div className="flex justify-between font-bold">
						<h2>Total Belanja</h2>
						<h2>{toIdr(calculateTotal + (calculateTotal * 10) / 100)}</h2>
					</div>
					<Button onClick={() => handleClick()}>Checkout</Button>
				</section>
			</div>
		</section>
	);
};

export default Cart;
