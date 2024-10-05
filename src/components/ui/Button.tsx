import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
	return (
		<button className={cn("bg-black text-white w-full rounded-md py-2.5", className)} {...props} />
	);
};

export default Button;
