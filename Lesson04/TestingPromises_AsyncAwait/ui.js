let promiseCount = 0;

async function handleButtonClick() {

	const thisPromiseCount = ++promiseCount;
	const randomNumber = Math.random();
	displayMessage('info', `Task ${thisPromiseCount} about to start with random number ${randomNumber}`);

	try {
		val = await doTask(thisPromiseCount, randomNumber);
        displayMessage('resolved', val)
	}
	catch (reason) {
		displayMessage('rejected', reason)
	}
}

function displayMessage(cssClass, message) {
	const messageArea = document.getElementById('messageArea')
 	messageArea.insertAdjacentHTML('beforeend', `<div class="${cssClass}">${message}</div>`);
}
