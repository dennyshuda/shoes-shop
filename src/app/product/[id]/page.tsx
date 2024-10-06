import Container from "@/components/common/Container";
import ProductDetail from "./modules";
import { getSingleProduct } from "../action";

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
	const product = await getSingleProduct(Number(params.id));

	return (
		<Container>{!product ? <div>loading</div> : <ProductDetail product={product} />}</Container>
	);
};

export default ProductDetailPage;
