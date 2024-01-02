class Person{
    constructor(name, age, phone, cpf){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.cpf = cpf;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getAge(){
        return this.age;
    }

    setAge(age){
        this.age = age;
    }

    getPhone(){
        return this.phone;
    }
    setPhone(phone){
        this.phone = phone;
    }

    getCPF(){
        return this.cpf;
    }

    setCPF(cpf){
        this.cpf = cpf;
    }
}


class Login extends Person{
    constructor(name, age, phone, cpf, email, password){
        super(name, age, phone, cpf);
        this.email = email;
        this.password = password;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
}


/* /^(\d{3})(\d{3})(\d{3})(\d{2})*/
let people = [];

const addPersonBtn = document.querySelector('.btn-send-info');

var nameInput = document.querySelector('.nameInput');
var ageInput = document.querySelector('.ageInput');
var phoneInput = document.querySelector('.phoneInput');
var cpfInput = document.querySelector('.cpfInput');
var emailInput = document.querySelector('.emailInput');
var passwordInput = document.querySelector('.passwordInput');

addPersonBtn.addEventListener('click', () =>{

    //name verification
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(nameInput.value.trim()) && nameInput.value.trim() !== '') {
        const newPerson = new Person();
        newPerson.setName(nameInput.value.trim());
        people.push(newPerson);
        nameInput.value = '';
        alert('Registered name.');
    } 
        else {
            alert('NAME ERROR. Please enter a valid name without the presence of numbers and null characters.Try again.');
        }
    

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


//phone mask
phoneInput.addEventListener('keypress', () =>{
    let phoneLength = phoneInput.value.length
    if(phoneLength === 0){
        phoneInput. value += '(';
    }
        else if(phoneLength === 3){
            phoneInput.value += ')';
        }
            else if(phoneLength === 4){
                phoneInput.value += '';
            }
                else if(phoneLength === 9){
                    phoneInput.value += '-';
                }
})
