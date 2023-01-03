const ls = require('./localStorageApi');

function incrementLikes() {
	if (ls.isLocalStorageSupported()) {
		let likes = ls.getNumber('likes', 0);
		likes++;
		ls.saveNumber('likes', likes);
	}
}

module.exports = {
	incrementLikes
};