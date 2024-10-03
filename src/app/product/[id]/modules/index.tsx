import Image from "next/image";

const ProductDetail = ({ id }: { id: string }) => {
	return (
		<section className="flex gap-5">
			<div className="w-1/2">
				<Image
					src="https://via.placeholder.com/400x400"
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
						<h1 className="font-bold text-2xl">Nike Dunk Low Retro {id}</h1>
						<h3>
							Nike | <span className="text-green-500">In Stock</span>
						</h3>
						<h3 className="font-medium">Rp. 1.000.000</h3>
					</div>

					<div>
						<h3 className="font-bold">Deskripsi</h3>
						<p className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit cupiditate omnis
							reiciendis fugit, repellat excepturi suscipit vitae ipsa nesciunt, doloremque quo
							laborum illum ipsam asperiores veritatis soluta voluptatibus temporibus minus.
						</p>
					</div>
				</section>
			</div>
		</section>
	);
};

export default ProductDetail;
