const rxjs = require('rxjs');

function emitSingleValue() {
	return rxjs.of(42);
}

module.exports = {
	emitSingleValue
};