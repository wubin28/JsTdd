const axios = require('axios');

const baseUrl = 'https://example.com/api/products'; 

function getAllProducts() {
	return axios.get(baseUrl)
	            .then(response => response.data);
}

function getProductById(id) {
	return axios.get(`${baseUrl}/${id}`)
	            .then(response => response.data);
}

module.exports = {
	getAllProducts, getProductById
};