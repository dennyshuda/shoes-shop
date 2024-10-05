import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toIdr(price: number) {
	return new Intl.NumberFormat("id-ID", { style: "currency", currency: "idr" }).format(price);
}
