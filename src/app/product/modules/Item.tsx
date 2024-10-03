import Image from "next/image";

const Item = () => {
	return (
		<div className="w-full grid grid-cols-3 gap-5">
			<div>
				<Image
					src="https://via.placeholder.com/400x400"
					width={0}
					height={0}
					alt="Product Image"
					className="w-full aspect-square "
					unoptimized
				/>

				<div>
					<h2 className="font-bold">Nike Dunk Low</h2>
					<h3 className="text-sm text-gray-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, repudiandae!
					</h3>
					<h3 className="font-medium">Rp. 30.000</h3>
				</div>
			</div>
			<div>
				<Image
					src="https://via.placeholder.com/400x400"
					width={0}
					height={0}
					alt="Product Image"
					className="w-full aspect-square "
					unoptimized
				/>

				<div>
					<h2 className="font-bold">Nike Dunk Low</h2>
					<h3 className="text-sm text-gray-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, repudiandae!
					</h3>
					<h3 className="font-medium">Rp. 30.000</h3>
				</div>
			</div>
			<div>
				<Image
					src="https://via.placeholder.com/400x400"
					width={0}
					height={0}
					alt="Product Image"
					className="w-full aspect-square "
					unoptimized
				/>

				<div>
					<h2 className="font-bold">Nike Dunk Low</h2>
					<h3 className="text-sm text-gray-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, repudiandae!
					</h3>
					<h3 className="font-medium">Rp. 30.000</h3>
				</div>
			</div>
		</div>
	);
};

export default Item;
