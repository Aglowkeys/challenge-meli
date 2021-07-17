const axios = require('../axios');
const author = require('../utils/author');
const errors = require('../utils/errors');
const { getFormattedProduct, getProductWithDescription } = require('../utils/functions');

// GET /api/items?q=query
const getProducts = (req, res) => {
    const productName = req.query.q;
    if (!productName) return res.status(400).json(errors.empty_query);

    axios
        .get(`/sites/MLA/search?q=${productName}&limit=4`)
        .then((response) => {
            const { filters, results } = response.data;

            if (results.length === 0) {
                return res.status(404).json(errors.not_found);
            }

            const { path_from_root } = filters[0].values[0];
            const categories = path_from_root.map((category) => category.name);
            const items = results.map((item) => getFormattedProduct(item));

            const formattedObject = { author, categories, items };
            return res.json(formattedObject);
        })
        .catch(() => res.status(500).json(errors.internal_error));
};

// GET /api/items/:id
const getProductInfo = (req, res) => {
    const { id } = req.params;
    const requests = [axios.get(`/items/${id}`), axios.get(`/items/${id}/description`)];
    let product, productDescription;

    Promise.all(requests)
        .then((dataArray) => {
            product = dataArray[0].data;
            productDescription = dataArray[1].data.plain_text;
            return axios.get(`/categories/${product.category_id}`);
        })
        .then((categoryData) => {
            // Necesito traer las categorías para evitar errores en el front y
            // poder mostrar los breadcrumbs si entro directamente a la URL del producto.
            const { path_from_root } = categoryData.data;
            const categories = path_from_root.map((cat) => cat.name);

            const item = getProductWithDescription(product, productDescription);
            const formattedObject = { author, item, categories };
            return res.json(formattedObject);
        })
        .catch((error) => {
            if (error.message.endsWith('404')) {
                return res.status(404).json(errors.not_found);
            }
            return res.status(500).json(errors.internal_error);
        });
};

module.exports = { getProducts, getProductInfo };
