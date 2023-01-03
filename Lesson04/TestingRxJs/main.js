const code = require('./code');

const observable = code.emitSingleValue();

observable.subscribe({
    next: data => console.log(data)
});