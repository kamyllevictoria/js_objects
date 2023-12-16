const Person = {
    name: '',
    age: '',
    getName: function() {
      return this.name;
    },
    getAge: function() {
      return this.age;
    },
    setName: function(name) {
      this.name = name;
    },
    setAge: function(age) {
      this.age = age;
    },
  };
  
  let people = [];
  const btnAdd = document.querySelector('.container-btn-add');
  const btnResult = document.querySelector('.container-result');
  
  btnAdd.addEventListener('click', () => {
    const nameInput = document.querySelector('.input-name');
    const ageInput = document.querySelector('.input-age');
  
    if (typeof nameInput.value === 'string' || nameInput.value !== '' || !isNaN(ageInput.value) || ageInput.value !== '') {
      const newPerson = Object.create(Person);
      newPerson.setName(nameInput.value);
      newPerson.setAge(ageInput.value);
      people.push(newPerson);
  
      nameInput.value = '';
      ageInput.value = '';
      nameInput.focus();
      addPerson();
      console.log('New registration completed!');
    } else {
      console.log('ERROR.Registration not completed!');
      alert('Fill in the form correctly!');
    }
  });
  
  const addPerson = function() {
    btnResult.innerHTML = '';
    people.forEach((p) => {
      const div = document.createElement('div'); // Criar uma nova div para cada pessoa
      div.innerHTML = `<p>Nome: ${p.getName()}</p> <p>Idade: ${p.getAge()}</p>`;
      btnResult.appendChild(div);
    });
  };
  