import midtrans from "midtrans-client";

const snap = new midtrans.Snap({
	isProduction: false,
	serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER,
});

export default snap;
