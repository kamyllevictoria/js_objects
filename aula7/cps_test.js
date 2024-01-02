addPersonBtn.addEventListener('click', () =>{
    //cpf verification
    var cpfOnlyNumbers = cpfInput.value.replace(/\./g, '').replace(/\-/g, ''); //regex
    if (allDigitsEqual(cpfOnlyNumbers)) {
        alert('Invalid CPF - All digits are equal.');
        return;
    } 
        else{
            var cpfTenNumbers = cpfOnlyNumbers.substr(0, 10);
            var cpfNineNumbers = cpfOnlyNumbers.substr(0, 9);
            var cpfNineSum = 0;
            var cpfTenSum = 0;
            var cpfCounter = 10;
        
            for (var i = 0; i < cpfNineNumbers.length; i++) {
                var number = parseInt(cpfNineNumbers.substr(i, 1));
                cpfNineSum += number * cpfCounter;
                cpfCounter--;
            }
            
            cpfCounter = 11;
            
            for (var i = 0; i < cpfTenNumbers.length; i++) {
                var number = parseInt(cpfTenNumbers.substr(i, 1));
                cpfTenSum += number * cpfCounter;
                cpfCounter--;
            }
        
            var cpfResultModule1 = (cpfNineSum * 10) % 11;
            var cpfResultModule2 = (cpfTenSum * 10) % 11;
        
            if ((cpfResultModule1 === parseInt(cpfOnlyNumbers.substr(9, 1))) && (cpfResultModule2 === parseInt(cpfOnlyNumbers.substr(10, 1)))) {
                alert('Valid CPF');
            } 
            else {
                alert('Invalid CPF');
            }
        }

});

function allDigitsEqual(cpf) {
    const firstDigit = cpf.charAt(0);
    return cpf.split('').every(digit => digit === firstDigit);
}

//cpf mask
cpfInput.addEventListener('keypress', () =>{
    let cpfLength = cpfInput.value.length
    if(cpfLength === 3 || cpfLength === 7){
        cpfInput.value += '.';
    }
        else if( cpfLength === 11){
            cpfInput.value += '-';
        }
})