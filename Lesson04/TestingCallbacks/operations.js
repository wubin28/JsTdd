function slowOperation(callback) {
	setTimeout(() => callback(42), 2_000)
}

function slowOperationWithParams(a, b, callback) {
	setTimeout(() => callback(a + b), 2_000)
}

module.exports = {
	slowOperation, slowOperationWithParams
};