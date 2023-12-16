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
        this.email = email;
    }
    getPassword(){
        this.password = password;
    }
}



let people = [];

const addPersonBtn = document.querySelector('.btn-send-info');

addPersonBtn.addEventListener('click', () =>{
    var nameInput = document.querySelector('.nameInput');
    var ageInput = document.querySelector('.ageInput');
    var phoneInput = document.querySelector('.phoneInput');
    var cpfInput = document.querySelector('.cpfInput');
    var emailInput = document.querySelector('.emailInput');
    var passwordInput = document.querySelector('.passwordInput');

    //name verification

    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(nameInput.value.trim()) && nameInput.value.trim() !== '') {
        const newPerson = new Person();
        newPerson.setName(nameInput.value.trim());
        people.push(newPerson);
        nameInput.value = '';
        console.log('Registered name.');
    } else {
        alert('Please enter a valid name without the presence of numbers and null characters.');
    }

    //cpf verification and regex

})