"use server";

import snap from "./init";

export const getToken = async (paramater: any) => {
	const generateId = `${Date.now()}-${Math.random().toString(16)}`;

	const params = {
		transaction_details: {
			order_id: generateId,
			gross_amount: paramater,
		},
	};

	const token = await snap.createTransactionToken(params);

	return token;
};
