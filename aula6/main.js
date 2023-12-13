class Car {
    constructor(name, doors) {
      this.name = name;
      this.doors = doors;
      this.on = false; // Inicializado como false
      this.velocity = 0; // Inicializado como 0
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
      if (this.on) {
        this.velocity = velocity;
      } else {
        console.log("O carro está desligado. Ligue o carro primeiro.");
      }
    }
  }
  
  class Military extends Car {
    constructor(name, doors, shield, ammunition) {
      super(name, doors); //invoca instancias da classes pai
      this.shield = shield;
      this.ammunition = ammunition;
      this.setColor("Black");
    }
  
    shotDown() {
      if (this.ammunition > 0) {
        console.log("Go!");
        this.ammunition--;
      } else {
        console.log("Stop!");
      }
    }
  }
  
  const car2 = new Military("Volvo", 3, "Yes", 50);
  
  car2.carOn(); // Ligar o carro
  car2.setVelocity(50); // Definir a velocidade
  
  console.log(`Name: ${car2.name} \nDoors: ${car2.doors}\nColor: ${car2.color} \nOn: ${car2.on} \nVelocity: ${car2.velocity}`);
  