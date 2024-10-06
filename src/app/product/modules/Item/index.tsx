import { getProducts } from "@/app/product/action";
import ProductCard from "./Card";

const Item = async () => {
	const products = await getProducts();

	return (
		<div className="w-full grid grid-cols-3 gap-5">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
};

export default Item;
