function verySlowOperation(callback) {
	setTimeout(
		() => callback(42),
		8_000
	)
}

module.exports = {
	verySlowOperation 
};