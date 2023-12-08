class People{
    constructor(name_c, age_c){
        this.name = name_c
        this.age = age_c
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    
    information(){
        console.log(`'Name:  ${this.name}`); 
        console.log(`Age: + ${this.age}`);
        console.log('------------------------------')
    } 
}

let person = [];
const btnAdd = document.querySelector('.container-btn-add');
const totalResult = document.querySelectorAll('.container-result');


btnAdd.addEventListener('click', function(){
    const name = document.querySelector('.input-name');
    const age = document.querySelector('.input-age');
    const newPerson = new People(name.value, age.value);
    person.push(newPerson);
    name.value = '';
    age.value = '';
    name.focus();
    console.log(person)
})