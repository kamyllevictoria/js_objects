const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelectorAll('[data-equals]');
const clearBtn = document.querySelector('[data-clear]');
const onBtn = document.querySelector('[data-on]')
const previousNumText = document.querySelector('.previous-number');
const currentNumText = document.querySelector('.current-number');

const maxLength = 17;

class Calculator {
    constructor(previousNumText, currentNumText ){
        this.previousNumText = previousNumText;
        this.currentNumText = currentNumText;
        this.clear() //devemos chamar esse metodo assim que a classe é instanciada para nao termos undefined no nosso display
    } //armazenar e manipular 

    

    //metodo para clicar em um numero
    appendNumber(number){
        if(this.currentOperand.includes('.') && number === '.'){
            return;
        } //impedir mais de um ponto
        this.currentOperand = `${this.currentOperand} ${number.toString()}` 
    }

    //atualizamos os campos da classe, mas não atualizamos os elementos de texto, logo, criamos uma metodo updatedisplay para isso
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    } 

    //metodo para atualizarmos o display
    updateDisplay(){
        this.previousNumText.innerText = this.previousOperand;
        this.currentNumText.innerText = this.currentOperand
    } 

}






const calculator = new Calculator(
    previousNumText,
    currentNumText,
)

for(const numberButton of numberBtn){
    numberButton.addEventListener('click', ()=> {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay()
    })
}

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})