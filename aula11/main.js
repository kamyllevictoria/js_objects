const Nave = function(energy) {
    this.energy = energy;
    this.shots = 100;
}

const nave1 = new Nave(500)
Nave.prototype.life = 3

Nave.prototype.go = function (){
    if(this.shots > 0){
        this.life --;
        this.shots --;
    }
}
nave1.go()
nave1.go()
nave1.go()


var myNave = new Nave();
myNave.shots = 2;
myNave.go()

console.log(myNave.life)

console.log(nave1)
console.log(nave1.energy)

//se quisermos adicionar novas propriedades em nosso objeto, podemos usar o prototype antes da nossa nova propriedade, que não é uma boa prática, pois é aconselhado a criação de novas instancias na nossa classe
//Usamos o prototype apos a criação da classe
