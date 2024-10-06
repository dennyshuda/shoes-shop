import { toIdr } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
	id: number;
	name: string;
	price: number;
	description: string | null;
	image: string | null;
};

const ProductCard = ({ id, name, price, description, image }: ProductCardProps) => {
	return (
		<Link href={`/product/${id}`}>
			<Image
				src={image ?? ""}
				width={0}
				height={0}
				alt={name}
				className="w-full aspect-square "
				unoptimized
			/>

			<div>
				<h2 className="font-bold">{name}</h2>
				<h3 className="text-sm text-gray-600">{description}</h3>
				<h3 className="font-medium">{toIdr(price)}</h3>
			</div>
		</Link>
	);
};

export default ProductCard;
