import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
	variant?: "secondary";
};

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => {
	return (
		<button
			className={cn(
				"bg-black text-white w-full rounded-md py-2.5",
				{ "bg-white text-black": variant === "secondary" },
				className
			)}
			{...props}
		/>
	);
};

export default Button;
