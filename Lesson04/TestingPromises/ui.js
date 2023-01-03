let promiseCount = 0;

function handleButtonClick() {

	const thisPromiseCount = ++promiseCount;

	const randomNumber = Math.random();
	displayMessage('info', `Task ${thisPromiseCount} about to start with random number ${randomNumber}`);

	const promise = doTask(thisPromiseCount, randomNumber);

	promise.then(val => displayMessage('resolved', val))
	       .catch(reason => displayMessage('rejected', reason))
}

function displayMessage(cssClass, message) {
	const messageArea = document.getElementById('messageArea')
 	messageArea.insertAdjacentHTML('beforeend', `<div class="${cssClass}">${message}</div>`);
}
