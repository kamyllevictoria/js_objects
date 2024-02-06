class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    calculateTax(){
        console.log('Calculating  tax...');
        return this.price * 0.1;
    }
}

class ElectronicProduct extends Product{
    constructor(name, price, material, color){
        super(name, price);
        this.material = material;
        this.color = color;
    }

    calculateTax(){
        console.log('Calculating  electronic tax...');
        return this.price * 0.2;
    }

}

class FoodProduct extends Product{
    constructor(name, price, composition, type){
        super(name, price);
        this.composition = composition;
        this.type = type;
    }

    calculateTax(){
        console.log('Calculating food tax...');
        return this.price * 0.15;
    }
}

function calculateTotalTax(product){
    const tax = product.calculateTax();
    const total = product.price + tax;
    console.log(`Total with tax: ${total.toFixed(2)}`)
}


const electronicProduct = new ElectronicProduct("Mouse", 150, "Silicium", "Black")
const foodProduct = new FoodProduct("Potato", 10, "Carbo", 30)

console.log(calculateTotalTax(electronicProduct))
console.log(calculateTotalTax(foodProduct))

