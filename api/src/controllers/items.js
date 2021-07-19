const axios = require('../axios');
const author = require('../utils/author');
const errors = require('../utils/errors');
const {
    getCategoryId,
    getFormattedProduct,
    getProductWithDescription,
} = require('../utils/functions');

// GET /api/items?q=query
const getProducts = async (req, res) => {
    const productName = req.query.q;
    if (!productName) return res.status(400).json(errors.empty_query);

    try {
        const { data: products } = await axios.get(`/sites/MLA/search?q=${productName}&limit=4`);
        const { filters, available_filters, results } = products;

        if (!results.length) return res.status(404).json(errors.not_found);

        let categories = [];

        if (filters.length) {
            const { path_from_root } = filters[0].values[0];
            categories = path_from_root.map((category) => category.name);
        } else {
            const catId = getCategoryId(available_filters);
            const { data } = await axios.get(`/categories/${catId}`);
            const { path_from_root } = data;
            categories = path_from_root.map((category) => category.name);
        }

        const items = results.map((item) => getFormattedProduct(item));
        const formattedObject = { author, categories, items };
        return res.json(formattedObject);
    } catch (error) {
        return res.status(500).json(errors.internal_error);
    }
};

// GET /api/items/:id
const getProductInfo = async (req, res) => {
    const { id } = req.params;

    try {
        const { data: product } = await axios.get(`/items/${id}`);
        const { data: productDescription } = await axios.get(`/items/${id}/description`);
        const { data: categoryData } = await axios.get(`/categories/${product.category_id}`);

        const { path_from_root } = categoryData;
        const categories = path_from_root.map((cat) => cat.name);

        const item = getProductWithDescription(product, productDescription.plain_text);
        const formattedObject = { author, item, categories };
        return res.json(formattedObject);
    } catch (error) {
        if (error.message.endsWith('404')) {
            return res.status(404).json(errors.not_found);
        }
        return res.status(500).json(errors.internal_error);
    }
};

module.exports = { getProducts, getProductInfo };
