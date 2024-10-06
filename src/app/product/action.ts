import prisma from "@/lib/prisma";

export const getProducts = async () => {
	const products = prisma.product.findMany();
	return products;
};

export const getSingleProduct = async (id: number) => {
	const product = prisma.product.findUnique({
		where: { id },
	});
	return product;
};
