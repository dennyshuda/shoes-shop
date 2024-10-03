import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
	return <div className="mx-auto container max-w-7xl px-5">{children}</div>;
};

export default Container;
