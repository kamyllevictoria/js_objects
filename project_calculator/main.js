const numericKeys = document.querySelectorAll('.num');
const operatorsKeys = document.querySelectorAll('.item-operator');
const resultItem = document.querySelector('.item-result');  
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
        addNumberDisplay(evt.target.innerHTML)

    })
})
