class Car{
    constructor(nameCar, typeCar){

        this.car = nameCar;
        this.type = typeCar;
        
        if(typeCar == 1){
            this.type = 'Sportive'
            this.velocity = 270
        } 
            else if(typeCar > 5){
                this.type = 'Classic'
                this.velocity = 150
            } 
                else if (typeCar < 0){
                    this.type = 'ERROR'
                    this.velocity = 'ERROR'
                }
                    else{
                        this.type = 'Adventure'
                        this.velocity = 240
                    }
    }
    getCar(){
        return this.car;
    }
    getType(){
        return this.type;
    }
    getVelocity(){
        return this.velocity;
    } //declarando funções

    getAllInfo(){
        return [this.car, this.type, this.velocity]
    } //declarando em array

    setCar(car){
        this.car = car;
    }//ao chamar o metodo set, renomeamos o valor informado do nome do carro, como pode ser observado em car1.setCar('BMW), o carro 1 não sera mais volvo e sim BM
    
    information(){
        console.log(`'Model:  ${this.car}`); 
        console.log(`Type: + ${this.type}`);
        console.log(`Velocity: + ${this.velocity}`);
        console.log('------------------------------')
    } //formatação template string
}


let car1 = new Car('Volvo', 5);
let car2 = new Car('Volksvaghem', 9);
let car3 = new Car('Fusca', -7);
let car4 = new Car('NewBeatle', 200);

car1.setCar('BMW') //

console.log(car1.getAllInfo()) //gostei mt do array!
