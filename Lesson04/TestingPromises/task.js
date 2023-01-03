function doTask(taskNumber, randomNumber) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (randomNumber < 0.5) 
				resolve(`Task ${taskNumber} resolved`);
			else 
				reject(`Task ${taskNumber} rejected`);
		}, randomNumber * 5000);
	});
}

module.exports = doTask;