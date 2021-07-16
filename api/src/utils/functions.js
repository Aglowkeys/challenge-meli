const getDecimals = (price) => {
    return +price.toString().split('.')[1] || 0;
};

const getFormattedProduct = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price),
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
    };
};

const getProductWithDescription = (item, description) => {
    return {
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
    };
};

module.exports = { getFormattedProduct, getProductWithDescription };
