class Car {
  constructor(name, doors) {
      this.name = name;
      this.doors = doors;
      this.on = false;
      this.velocity = 0;
      this.color = '';
  }

  carOn() {
      this.on = true;
  }

  carOff() {
      this.on = false;
      this.velocity = 0;
  }

  setColor(color) {
      this.color = color;
  }

  setVelocity(velocity) {
      this.on = true;
      this.velocity = velocity;
      if(velocity === 0 || velocity <= 0){
        this.on = false;
        this.velocity = velocity;
      }
  }
}

class Military extends Car {
  constructor(name, doors, shield, ammunition) {
      super(name, doors);
      this.setColor("Black");
      this.shield = shield;
      this.ammunition = ammunition;
  }

  setShield(shield) {
      this.shield = shield;
  }
  setAmmunition(ammunition) {
      this.ammunition = ammunition;
  }
}

const car2 = new Military("Volvo", 3);
car2.setVelocity(120);
car2.setAmmunition(12)
car2.setShield(32)

// Imprimindo todas as propriedades de car2
console.log(`Basic car informations: Name: ${car2.name} \nDoors: ${car2.doors} \nOn: ${car2.on} \nVelocity: ${car2.velocity} \nColor: ${car2.color}`);
console.log('-------------');
console.log(`Military informations: \nShield: ${car2.shield} \nAmmunition: ${car2.ammunition}`)
