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
        console.log('Registered name.');
    } 
        else {
            alert('NAME ERROR. Please enter a valid name without the presence of numbers and null characters.Try again.');
        }

    // cpf verification
    var cpfOnlyNumbers = cpfInput.value.replace(/\./g, '').replace(/\-/g, ''); // regex
    if(cpfOnlyNumbers === ''){
        alert('Preencha os campos de CPF.')
    }
    else if (allDigitsEqual(cpfOnlyNumbers)) {
        alert('Invalid CPF - All digits are equal.');
        return;
    } 
        else if(cpfOnlyNumbers.length !== 11){
            alert('Please fill in all the CPF fields.')
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
                cpfResultModule1 = cpfResultModule1 === 10 ? 0 : cpfResultModule1; 

                var cpfResultModule2 = (cpfTenSum * 10) % 11;
                cpfResultModule2 = cpfResultModule2 === 10 ? 0 : cpfResultModule2; 

                if (cpfResultModule1 === parseInt(cpfOnlyNumbers.substr(9, 1)) && cpfResultModule2 === parseInt(cpfOnlyNumbers.substr(10, 1))) {
                    console.log('Registered CPF.');
                } 
                    else {
                        console.log('Invalid CPF.');
                    }
            } 
    

    //email validation
    const email = emailInput.value.trim();
    if(validEmail(email)){
        console.log('Valid E-mail.')
    } 
        else{
            console.log('Invalid E-mail.')
        }
    
    //phone validation

    const phoneOnlyNumbers = phoneInput.value.replace(/\./g, '').replace(/\-/g, '').replace(/\)/g, '').replace(/\(/g, '')
    if(phoneOnlyNumbers === ''){
        alert('campos vazios nao sao aceitos')
    }
        else if(!/^\d+$/.test(phoneOnlyNumbers)){
            alert('informe apenas numeros no campo de telefone')
        }
            else if(phoneOnlyNumbers.length < 11){
                alert('Preencha todos os campos de telefone')
            }

    //age validation
    const ageOnlyNumbers = ageInput.value.replace(/\./g, '').replace(/\-/g, '');
    if(ageOnlyNumbers.length === ''){
        alert('Please, enter a valid age number.')
    }
        else if(!/^\d+$/.test(ageOnlyNumbers)){
            alert('Only enter numbers in the age field!')
        }
        else{
            console.log('Registered age.')
        }

});

function validEmail(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function allDigitsEqual(cpf) {
    const firstDigit = cpf.charAt(0);
    return cpf.split('').every(digit => digit === firstDigit);
}


// cpf mask
cpfInput.addEventListener('keypress', () => {
    let cpfLength = cpfInput.value.length;
    if (cpfLength === 3 || cpfLength === 7) {
        cpfInput.value += '.';
    } else if (cpfLength === 11) {
        cpfInput.value += '-';
    }
});

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




//visualization of created objects and instances
/*
    const newPerson = new Person();
    newPerson.setCPF(cpfInput.value);
    newPerson.setName(nameInput.value.trim());
    people.push(newPerson);
    cpfInput.focus();
    nameInput.focus();
    nameInput.value = '';
    cpfInput.value = '';
    //console.log(people);
*/
