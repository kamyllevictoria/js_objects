const numericKeys = document.querySelectorAll('.num');
const operatorsKeys = document.querySelectorAll('.item-operator');
const resultItem = document.querySelector('.item-result');  
const turnOnBtn = document.getElementById('on');
const clearBtn = document.getElementById('ac');

let signal = false

const display = document.querySelector('.display');
const maxLength = 17;

function addNumberDisplay(number){
    if(display.innerHTML.length < maxLength){
        display.innerHTML += number;
    }
        else{
            alert('Maximum limit 17 characters')
        }
}

numericKeys.forEach((element) =>{
    element.addEventListener('click', (evt) => {
        signal = false;

        if(display.innerHTML == '0'){
            display.innerHTML = '';
        }

        addNumberDisplay(evt.target.innerHTML);
    })
}) //exibir numeros no display


operatorsKeys.forEach((element) => {
    element.addEventListener('click', (evt) => {
        if(!signal){
            signal = true;

            if(display.innerHTML == '0'){
                display.innerHTML = '';
            }
            
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*';
            } else{
                display.innerHTML += evt.target.innerHTML;
            }
        }
    }) 
})

clearBtn.addEventListener('click', (evt) => {
    signal = false;
    display.innerHTML = ""
})