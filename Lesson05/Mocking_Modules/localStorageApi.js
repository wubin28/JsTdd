function isLocalStorageSupported() {
	return typeof(Storage) !== void(0)
}

function getNumber(propertyName, defaultValue) {
	let value = Number(window.localStorage[propertyName])
	if (isNaN(value)) { 
        return defaultValue
	}
	else {
		return value
	}
}

function saveNumber(propertyName, value) {
	window.localStorage[propertyName] = value
}

module.exports = {
	isLocalStorageSupported, getNumber, saveNumber
};