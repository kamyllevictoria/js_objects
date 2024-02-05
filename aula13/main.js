const myNumber = document.querySelector('.number');
myNumber.innerHTML = 'Loading...';

// Criando a promise
let promise = new Promise((resolve, reject) => {
    let result = true; //false = red //true = blue
    let time = 3000;

    setTimeout(() => {
        if (result) {
            resolve('Everything is ok!'); 
        } else {
            reject('There is something wrong!');
        }
    }, time);
});

promise.then((message) => {
    myNumber.innerHTML = message;
    myNumber.classList.remove('red');
    myNumber.classList.add('blue');
})
promise.catch((message) => {
    myNumber.innerHTML = message;
    myNumber.classList.remove('blue');
    myNumber.classList.add('red');
});
myNumber.innerHTML = 'Loading...'


