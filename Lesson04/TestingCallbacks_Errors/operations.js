function slowOperationWithError_bad(a, b, callback) {
	setTimeout(
		() => {
			if (b === 0) {
				throw new Error('Cannot divide by 0')
			}
			else {
				callback(a / b)
			}
		},
		2_000
	)
}

function slowOperationWithError_good(a, b, resultCallback, errorCallback) {
	setTimeout(
		() => {
			if (b == 0) {
				errorCallback('Cannot divide by 0')
			}
			else {
				resultCallback(a / b)
			}
		},
		2_000
	)
}

module.exports = {
	slowOperationWithError_bad, slowOperationWithError_good 
};