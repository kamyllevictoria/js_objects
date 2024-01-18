const p1 = {
    name: 'Computer',
    price: 3000.0,
    quantity: 2
}


const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.label = function(){
        return "Dados: (funcao interna)"+ this.name + ", Valor: " + this.price;
    }
}


Product.prototype.total = function(){
    return this.price * this.quantity;
}

Product.prototype.add = function(amount){
    this.quantity += amount;
}

Product.prototype.remove = function(amount){
    if(this.quantity >= amount){
        this.quantity -= amount;
    }
}

Product.prototype.label = function(){
    return "Dados: "+ this.name + ", Valor: " + this.price;
}

console.log(Product.toString())

const p2 = new Product("Monitor", 800.0, 10)


const p3 = new Product("Mouse", 150, 5)


//Dentro das funções contrutoras temos as propriedades e, dentro dos prototypes temos os metodos.
//quando criamos funções dentro do objeto, em cada instancia todas as funções irão se repetir e geralmente funções são lógicas e naõ dados, logo, não precisamos ficar repetindo para cada objeto.

//Se temos uma função dentro do construtor com o mesmo nome do prototipo, a função que irá ser executada é a do objeto (label), ela é a prioridade

//Mas como acessamos a função de mesmo nome que esta no prototipo? No console. usamos Product.prototype.label.call(p2)