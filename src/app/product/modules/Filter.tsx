"use client";

import { useShallow } from "zustand/react/shallow";
import Input from "@/components/ui/Input";
import { useFilterStore } from "@/lib/filter";
import { SubmitHandler, useForm } from "react-hook-form";

export type FilterPayload = {
	sort: string;
};

const Filter = () => {
	const { sort, setSort } = useFilterStore(
		useShallow((state) => ({
			sort: state.sort,
			setSort: state.setSort,
		}))
	);

	const { register, handleSubmit } = useForm<FilterPayload>({
		defaultValues: {
			sort: "asc",
		},
	});

	const onSubmit: SubmitHandler<FilterPayload> = async (data) => {
		setSort(data.sort);
	};

	return (
		<section className="w-80">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="space-y-2 mb-5">
					<h1 className="font-bold text-2xl">Kategori</h1>
					<Input type="checkbox" name="asics" value="Asics" label="Asics" />
					<Input type="checkbox" name="newbalance" value="New Balance" label="New Balance" />
					<Input type="checkbox" name="nike" value="Nike" label="Nike" />
				</div>

				<div className="space-y-2">
					<h1 className="font-bold text-2xl">Sort By</h1>
					<Input type="radio" label="Terbaru" {...register("sort")} value="asc" />
					<Input type="radio" label="Terlama" {...register("sort")} value="desc" />
				</div>
			</form>
		</section>
	);
};

export default Filter;
