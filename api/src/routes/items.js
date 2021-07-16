const express = require('express');
const router = express.Router();
const axios = require('../axios');
const { getObjectWithCategories, getObjectWithDescription } = require('../utils/functions');

router.get('/', (req, res) => {
	const productName = req.query.q;

	if (!productName) return res.status(400).json('Ingresa un término a buscar');

	axios
		.get(`/sites/MLA/search?q=${productName}&limit=4`)
		.then((response) => {
			const { filters, results } = response.data;
			const { path_from_root } = filters[0].values[0];
			const categories = path_from_root.map((cat) => cat.name);
			const items = results.map((item) => getObjectWithCategories(item, categories));
			return res.json(items);
		})
		.catch((error) => res.status(500).json({ error }));
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const requests = [axios.get(`/items/${id}`), axios.get(`/items/${id}/description`)];
	let formattedProduct = {};

	Promise.all(requests)
		.then((dataArray) => {
			const product = dataArray[0].data;
			const productDescription = dataArray[1].data.plain_text;
			formattedProduct = getObjectWithDescription(product, productDescription);
			return axios.get(`/categories/${product.category_id}`);
		})
		.then((categoryData) => {
			const { path_from_root } = categoryData.data;
			const categories = path_from_root.map((cat) => cat.name);
			formattedProduct['categories'] = categories;
			return res.json(formattedProduct);
		})
		.catch((error) => res.status(500).json({ error }));
});

module.exports = router;
