import Filter from "./Filter";
import Item from "./Item";

const Product = () => {
	return (
		<section className="flex gap-5">
			<Filter />
			<Item />
		</section>
	);
};

export default Product;
