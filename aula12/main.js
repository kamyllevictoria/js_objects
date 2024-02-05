class Shape{
    constructor(name){
        this.name = name;
        if(this.constructor == Shape){
            throw new Error ('The Shape Class can not be instantiated.')
        }
            if(this.getArea == undefined){
                throw new Error ('The method need to be informed')
            }
    }
    
}

class Rectangle extends Shape{
    constructor(name, lengths, widths){
        super(name);
        this.lengths = lengths;
        this.widths = widths
    }
}

const myShape = new Shape ('My shape') //Erro, não podemos instanciar uma função abstrata
const smallRectangle = new Rectangle ("Small rectangle", 3,5) //teremos outro erro, pois não instanciamos o nosos metodo getArea() na classe retangulo