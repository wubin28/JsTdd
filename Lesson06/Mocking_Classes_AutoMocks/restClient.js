const axios = require('axios');

class RestClient {

	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	delete(id) {
		axios.delete(`${this.baseUrl}/${id}`)
	}

	update(id, item) {
		axios.put(`${this.baseUrl}/${id}`, item)
	}

	getAll() {
		return axios.get(this.baseUrl)
					.then(response => response.data);
	}

	get(id) {
		return axios.get(`${this.baseUrl}/${id}`)
					.then(response => response.data);
	}
}

module.exports = {
	RestClient
};