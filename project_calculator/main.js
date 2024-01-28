const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]')
const previousNumText = document.querySelector('.previous-number');
const currentNumText = document.querySelector('.current-number');

const maxLength = 17;

class Calculator {
    constructor(previousNumText, currentNumText ){
        this.previousNumText = previousNumText;
        this.currentNumText = currentNumText;
        this.clear() //devemos chamar esse metodo assim que a classe é instanciada para nao termos undefined no nosso display
    } //armazenar e manipular 


    delete(){
        this.currentNumText = this.currentOperand.toString().slice(0, -1);
    }

    calculate(){
        //função para calcular os numeros conforme vamos inserindo-o, transformando-os em numeros float
        let result;
    
        const _previousOperand = parseFloat(this.previousOperand);
        const _currentOperand = parseFloat(this.currentOperand);

        if(isNaN(_previousOperand) || isNaN(_currentOperand)){
            return;
        }
        //tipos de operações
        switch(this.operation){
            case '+':
                result = _previousOperand + _currentOperand;
                break;
            case '-':
                result = _previousOperand - _currentOperand;
                break;
            case 'x':
                result = _previousOperand * _currentOperand;
                break;
            case '/':
                result = _previousOperand / _currentOperand;
                break;
            case '%':
                result = _currentOperand / 100;
                break;
            default:
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }



    chooseOperation(operation){
        if(this.previousOperand !== ''){
            this.calculate()
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand; //exibe numero e sinal
        this.currentOperand = '';
    }

    //metodo para clicar em um numero
    appendNumber(number){
        if(this.currentOperand.includes('.') && number === '.'){
            return;
        } //impedir mais de um ponto
        this.currentOperand = `${this.currentOperand}${number.toString()}`

    }

    //atualizamos os campos da classe, mas não atualizamos os elementos de texto, logo, criamos uma metodo updatedisplay para isso
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    } 

    //metodo para atualizarmos o display
    updateDisplay(){
        this.previousNumText.innerText = `${this.previousOperand} ${this.operation || ''}`
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

//enviando informações para o previousNumber quando o elemento de operação for clicado
for(const operationButton of operationBtn){
    operationButton.addEventListener('click', () => {
        calculator.chooseOperation(operationButton.innerText);
        calculator.updateDisplay();
    });
}

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

equalBtn.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})