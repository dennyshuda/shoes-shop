import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
	label?: string;
	containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, className, containerClassName, ...props }, ref) => {
		return (
			<div className={cn("flex flex-col gap-1 w-full", containerClassName)}>
				{label && (
					<label htmlFor={label} className="text-sm font-medium text-gray-700">
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
