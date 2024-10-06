"use client";

import Image from "next/image";
import { useShallow } from "zustand/react/shallow";
import { Product } from "@prisma/client";
import Button from "@/components/ui/Button";
import { useCartStore } from "@/lib/store/cart";
import { toIdr } from "@/lib/utils";

type ProductDetailProps = {
	product: Product;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
	const { addToCart } = useCartStore(useShallow((state) => ({ addToCart: state.addToCart })));

	return (
		<section className="flex gap-5">
			<div className="w-1/2">
				<Image
					src={product.image || ""}
					width={0}
					height={0}
					alt="Product Image"
					className="w-full aspect-video object-cover"
					unoptimized
				/>
			</div>
			<div className="w-1/2">
				<section className="space-y-3">
					<div className="space-y-3">
						<h1 className="font-bold text-2xl">{product?.name}</h1>
						<h3>
							{product.brand} | <span className="text-green-500">In Stock</span>
						</h3>
						<h3 className="font-medium">{toIdr(product?.price)}</h3>
					</div>

					<div>
						<h3 className="font-bold">Deskripsi</h3>
						<p className="text-gray-600">{product?.description}</p>
					</div>
					<Button
						onClick={() =>
							addToCart({ name: product.name, id: product.id, price: product.price, quantity: 1 })
						}
					>
						Add to cart
					</Button>
				</section>
			</div>
		</section>
	);
};

export default ProductDetail;
