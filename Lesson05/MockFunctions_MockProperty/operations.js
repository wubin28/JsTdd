function add(a, b) {
	return a + b;
}

function processArray(arr, op) {
	for (val of arr) {
		op(val)
	}
}

module.exports = {
	add, processArray
};