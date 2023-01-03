const isValid = require('./util');

function getGrade(examMark) {

	const status = isValid(examMark);
	if (status != 'OK') {
		return status;
	}

	if (examMark >= 70)
		return 'A';
	else if (examMark >= 60) 
		return 'B';
	else if (examMark >= 50)
		return 'C';
	else
		return 'Fail';
}

module.exports = getGrade;
