function People(name_c, age_c){
    this.name = name_c,
    this.age = age_c,

    this.getName = () => {
        return this.name;
    },
    this.getAge = () => {
        return this.age;
    },
    this.setName = (name) => {
        this.name = name;
    },
    this.setAge = (age)=> {
        this.age = age;
    },
    //no metodo set, passamos o parametro name e age
    this.information = ()=> {
        console.log(`'Name:  ${this.name}`);
        console.log(`Age: + ${this.age}`);
        console.log('------------------------------');
    }
}

//creating variables
let person = [];
const btnAdd = document.querySelector('.container-btn-add');
const totalResult = document.querySelector('.container-result');


//adding persons with conditionals
btnAdd.addEventListener('click', () => {

    const name = document.querySelector('.input-name');
    const age = document.querySelector('.input-age');

    if (typeof name.value === 'string' && isNaN(name.value) && !isNaN(age.value) && name.value !== '' && age.value !== '') {
        const newPerson = new People(name.value, age.value);
        person.push(newPerson);
        name.value = '';
        age.value = '';
        name.focus();
        console.log('Test performed');
        addPerson();
    } else {
        alert('ERROR. Enter valid characters in the name and age fields, please!');
    }
});

//adding the array in the div
const addPerson = () => {
    totalResult.innerHTML = '';
    person.forEach((p) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>Name: ${p.getName()}</p> <p>\nAge: ${p.getAge()}</p>`;
        totalResult.appendChild(div);
    });
}

