const getDecimals = (price) => {
	return +price.toString().split('.')[1] || 0;
};

const getFormattedObject = (item, categories) => {
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
			amount: item.price,
			decimals: getDecimals(item.price),
		},
		picture: item.thumbnail,
		condition: item.condition,
		free_shipping: item.shipping.free_shipping,
	};
};

module.exports = getFormattedObject;
