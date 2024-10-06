import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Cart {
	id: number;
	name: string;
	quantity: number;
	price: number;
}

interface CartState {
	cart: Cart[];
	addToCart: (payload: Cart) => void;
	increaseQuantity: (id: number) => void;
	decreaseQuantity: (id: number) => void;
}

export const useCartStore = create<CartState>()(
	devtools(
		persist(
			(set, get) => ({
				cart: [],

				addToCart: (payload) => {
					const itemExists = get().cart.find((c) => c.id === payload.id);
					if (itemExists) {
						if (typeof itemExists.quantity === "number") {
							itemExists.quantity += 1;
						}
						set({ cart: [...get().cart] });
					} else {
						set({ cart: [...get().cart, { ...payload, quantity: 1 }] });
					}
				},

				increaseQuantity: (id) => {
					const itemExists = get().cart.find((c) => c.id === id);
					if (itemExists) {
						if (typeof itemExists.quantity === "number") {
							itemExists.quantity++;
						}
						set({ cart: [...get().cart] });
					}
				},

				decreaseQuantity: (id) => {
					const itemExists = get().cart.find((c) => c.id === id);
					if (itemExists) {
						if (typeof itemExists.quantity === "number") {
							if (itemExists.quantity === 1) {
								const updatedCart = get().cart.filter((c) => c.id !== id);
								set({ cart: updatedCart });
							} else {
								itemExists.quantity--;
								set({ cart: [...get().cart] });
							}
						}
					}
				},
			}),
			{ name: "cart" }
		)
	)
);
