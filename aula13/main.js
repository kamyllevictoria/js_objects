const myNumber = document.querySelector('.number');
const myBtn = document.querySelector('.promise_btn')

myNumber.innerHTML = 'Loading...';

const myPromise = ()=>{
    return new Promise((resolve, reject) => {
        let result = false; 
        let time = 3000;
    
        setTimeout(() => {
            if (result) {
                resolve('Everything is ok!'); 
                myNumber.innerHTML = 'Everything is ok!'
                myNumber.classList.remove('red');
                myNumber.classList.add('blue');
            } else {
                reject('There is something wrong!');
                myNumber.innerHTML = 'There is something wrong!'
                myNumber.classList.remove('blue');
                myNumber.classList.add('red');
            }
        }, time);

    })
}

myBtn.addEventListener('click', ()=>{

    myNumber.innerHTML = 'Waiting...'
    myPromise()

    .then((message) => {
        myNumber.innerHTML = message;
        myNumber.classList.remove('red');
        myNumber.classList.add('blue');
    })
    .catch((message) => {
        myNumber.innerHTML = message;
        myNumber.classList.remove('blue');
        myNumber.classList.add('red');
    });

})

