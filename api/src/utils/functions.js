const getDecimals = (price) => {
	return +price.toString().split('.')[1] || 0;
};

const getObjectWithCategories = (item, categories) => {
	return {
		author: {
			name: 'Emiliano',
			lastname: 'Alfonso',
		},
		categories,
		id: item.id,
		title: item.title,
		price: {
			currency: item.currency_id,
			amount: Math.trunc(item.price),
			decimals: getDecimals(item.price),
		},
		picture: item.thumbnail,
		condition: item.condition,
		free_shipping: item.shipping.free_shipping,
	};
};

const getObjectWithDescription = (item, description) => {
	return {
		author: {
			name: 'Emiliano',
			lastname: 'Alfonso',
		},
		item: {
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: Math.trunc(item.price),
				decimals: getDecimals(item.price),
			},
			picture: item.pictures[0]?.url || item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
			sold_quantity: item.sold_quantity,
			description,
		},
	};
};

module.exports = { getObjectWithCategories, getObjectWithDescription };
