import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.product.createMany({
		data: [
			{
				name: "Adidas Java Island Series Night Sky Viva Red White",
				brand: "Adidas",
				price: 2100000,
				description: "this is example",
				sizes: [39, 40, 41, 42, 43, 44, 45],
				image: "https://via.placeholder.com/400x400",
			},
			{
				name: "New Balance 1906R White Gold",
				brand: "New Balance",
				price: 2500000,
				description: "this is example",
				sizes: [39, 40, 41, 42, 43, 44, 45],
				image: "https://via.placeholder.com/400x400",
			},
			{
				name: "ASICS Gel-Kayano 14 Black Pure Silver",
				brand: "Asics",
				price: 2200000,
				description: "this is example",
				sizes: [39, 40, 41, 42, 43, 44, 45],
				image: "https://via.placeholder.com/400x400",
			},
		],
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
