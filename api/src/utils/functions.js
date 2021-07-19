const axios = require('axios');

const getCategoryId = (availableFilters) => {
    const sortedCategories = availableFilters[0].values.sort((a, b) => {
        return b.results - a.results;
    });
    return sortedCategories[0].id;
};

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
        address: product.address.state_name,
    };
};

const getProductWithDescription = (product, description) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price),
        },
        picture: product.pictures[0]?.url || product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description,
    };
};

module.exports = { getCategoryId, getFormattedProduct, getProductWithDescription };
