function countdown(callback, seconds) {
	setTimeout(
		() => callback(`${seconds} seconds countdown complete`),
		seconds * 1000
	);
}

module.exports = {
	countdown
};