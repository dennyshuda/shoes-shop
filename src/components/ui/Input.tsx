import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
	label?: string;
	containerClassName?: string;
	labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, className, containerClassName, labelClassName, ...props }, ref) => {
		return (
			<div
				className={cn(
					"flex flex-col gap-1 w-full",
					{ "flex-row gap-2": props.type === "checkbox" || props.type === "radio" },
					containerClassName
				)}
			>
				{label && (
					<label
						htmlFor={label}
						className={cn(
							"text-sm font-medium text-gray-700",
							{
								"order-1 text-lg": props.type === "checkbox" || props.type === "radio",
							},
							labelClassName
						)}
					>
						{label}
					</label>
				)}
				<input
					ref={ref}
					className={cn(
						"border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-150",
						className
					)}
					{...props}
				/>
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
