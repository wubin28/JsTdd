const rxjs = require('rxjs');

function emitStream1() {
	const arr = [100, 200, 300, 400, 500]
	return rxjs.from(arr);
}

function emitStream2(len) {
	const arr = Array.from(
		{length: len}, 
		() => Math.floor(Math.random() * 101)
	)
	return rxjs.from(arr);
}

function emitStream3(len) {
	if (len <= 0) {
		return rxjs.throwError(() => new Error('Bad length'))
	}
	const arr = Array.from({length: len}, () => Math.floor(Math.random() * 101))
	return rxjs.from(arr);
}

module.exports = {
	emitStream1, emitStream2, emitStream3
};