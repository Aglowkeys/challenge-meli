const express = require('express');
const api = express();
const axios = require('axios');
const getFormattedObject = require('./utils/functions');

// api.use(express.json());

api.get('/api/items', (req, res) => {
	const productName = req.query.q;
	axios
		.get(`https://api.mercadolibre.com/sites/MLA/search?q=${productName}&limit=4`)
		.then((response) => {
			const { filters, results } = response.data;
			const { path_from_root } = filters[0].values[0];
			const categories = path_from_root.map((cat) => cat.name);
			const items = results.map((item) => getFormattedObject(item, categories));
			return res.json(items);
		})
		.catch((error) => res.status(400).json({ error }));
});

api.get('/api/items/:id', (req, res) => {
	const { id } = req.params;

	Promise.all([
		axios.get(`https://api.mercadolibre.com/items/${id}`),
		axios.get(`https://api.mercadolibre.com/items/${id}/description`),
	])
		.then((dataArray) => {
			const productInfo = dataArray[0].data;
			const productDescription = dataArray[1].data;
			return res.json(productDescription);
		})
		.catch((error) => res.status(400).json({ error }));
});

api.listen(3001, () => {
	console.log('Servidor escuchando en puerto 3001');
});
