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
    setEmail(email){
        this.email = email;
    }
    getPassword(){
        return this.password;
    }
    setPassword(password){
        this.password = password;
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


function validCPF(){
    var cpfOnlyNumbers = cpfInput.value.replace(/\./g, '').replace(/\-/g, ''); // regex
    if(cpfOnlyNumbers === ''){
        console.log('Fill all the CPF fields.')
    }
    else if (allDigitsEqual(cpfOnlyNumbers)) {
        console.log('Invalid CPF. All digits are equal.');
        return;
    } 
        else if(cpfOnlyNumbers.length !== 11){
            console.log('Please fill in all the CPF fields.')
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
}

function allDigitsEqual(cpf) {
    const firstDigit = cpf.charAt(0);
    return cpf.split('').every(digit => digit === firstDigit);
}

function validName(){
    //name verification
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(nameInput.value.trim()) && nameInput.value.trim() !== '') {
        console.log('Registered name.');
    } 
        else {
            console.log('Invalid name.');
        }
}

function validPhone(){
    const phoneOnlyNumbers = phoneInput.value.replace(/\./g, '').replace(/\-/g, '');
    if (phoneOnlyNumbers.length < 11 || phoneOnlyNumbers === '') {
        console.log('Fill in the phone number fields.');
    } 
        else if (!/^\d+$/.test(phoneOnlyNumbers)) {
            console.log('Enter only numbers at phone number field!');
        } 
            else {
                console.log('Registered phone number.');
            }
}


function validEmail(email){
    const emailStr = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailRegex.test(emailStr)){
        console.log('Valid Email.')
    }
        else{
            console.log('Invalid Email.')
        }
}

function validAge(){
    const ageOnlyNumbers = ageInput.value.replace(/\./g, '').replace(/\-/g, '');
    if(ageOnlyNumbers.length === ''){
        console.log('Please, enter a valid age number.')
    }
        else if(!/^\d+$/.test(ageOnlyNumbers)){
            console.log('Only enter numbers in the age field!')
        }
            else{
                console.log('Registered age.')
            }
}



function validPassword(passwordInput) {
    console.log('senha recebida: ', passwordInput)
    const passwordRegex = /^(?!.*(.).*\1)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+/;
    ///^(?=.*\d).{5,}$/;
    const passwordIsValid = passwordRegex.test(passwordInput);

    if (passwordIsValid) {
        console.log('Registered password.');
    } 
        else {
            console.log('Invalid password.Your password must include a number, an uppercase letter, a lowercase letter and a special character, and must not allow repeated characters.');
        }
        return passwordIsValid;
}

addPersonBtn.addEventListener('click', (event) =>{
    event.preventDefault();
   validName();
   validEmail()
   validCPF();
   validPhone();
   validPassword(passwordInput.value)
});

//we are using newLogin because it is a subclass that contains information about the Person masterclass, how it receives inheritance, so we can use it for all instances.

/*// visualization of created objects and instances
    //visualization of created objects and instances
    const newLogin = new Login();
    newLogin.setCPF(cpfInput.value);
    newLogin.setName(nameInput.value.trim());
    newLogin.setAge(ageInput.value);
    newLogin.setPhone(phoneInput.value);
    newLogin.setEmail(emailInput.value);
    newLogin.setPassword(passwordValue);
    people.push(newLogin);
    console.log(people); */

// cpf mask
cpfInput.addEventListener('keypress', () => {
    let cpfLength = cpfInput.value.length;
    if (cpfLength === 3 || cpfLength === 7) {
        cpfInput.value += '.';
    } else if (cpfLength === 11) {
        cpfInput.value += '-';
    }
});

