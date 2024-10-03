import Container from "@/components/common/Container";
import ProductDetail from "./modules";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
	return (
		<Container>
			<ProductDetail id={params.id} />
		</Container>
	);
};

export default ProductDetailPage;
