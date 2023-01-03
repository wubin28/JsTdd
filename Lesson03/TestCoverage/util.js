function isValid(examMark) {
	if (examMark < 0) 
		return 'Too low';
	else if (examMark > 100)
		return 'Too high';
	else
		return 'OK';
}

module.exports = isValid;
