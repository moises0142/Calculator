function add(a,b){
    return +a+ +b;
}

function subtract(a,b){
    return +a- +b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return +a/ +b;
}

let firstNum;
let operand;
let secondNum;
let output;

function operate(firstNum, secondNum, operand){
    
    if(operand == ('+')){
        result = add(firstNum,secondNum);
        return result;
    }

    if(operand == ('-')){
        result = subtract(firstNum,secondNum);
        return result;
    }

    if(operand == ('*')){
        result = multiply(firstNum,secondNum);
        return result;
    }  

    if(operand == ('/')){          
        if(secondNum == 0){
            return "ayooo";
        }
        result = divide(firstNum,secondNum);
        return result;
    }
}



let body = document.querySelector("body");
let buttons = document.querySelectorAll(".number");
buttons.forEach(populateDisplay);
let display = document.createElement("div");
let answer = document.createElement("div");
let textContainer= '';
let clearBtn = document.querySelector('.clear');
let operandBtn = document.querySelectorAll('.operand');
let equalBtn = document.querySelector('.equals')
operandBtn.forEach(operandBtnFunc);


clearBtn.addEventListener("click",()=>{
    firstNum= '';
    secondNum= '';
    operand= '';
    display.textContent = '';
    textContainer= '';
    clickCounter=0;
})

let displayContainer='';

function populateDisplay(el){
    el.addEventListener("click",()=>{
        
        display.textContent += el.textContent;
        displayContainer = `${display.textContent}`;
        body.appendChild(display);
    });
}

let clickCounter=0;
let gyatt ='';
function operandBtnFunc(el){
    el.addEventListener('click',()=>{
        if(clickCounter == 0){        
        operand = el.textContent;
        firstNum = display.textContent;
        
        display.textContent='';
    }
    if(clickCounter== 1){
        secondNum = display.textContent;
        gyatt = operate(firstNum,secondNum,operand)
        display.textContent= gyatt ;
        //operand =el;
        //firstNum = display.textContent;
    }
    if(clickCounter >= 2){
        firstNum = display.textContent
        
        secondNum = display.textContent;
        gyatt = operate(firstNum,secondNum,operand)
        display.textContent= gyatt ;

    }
        
    clickCounter++;
    })
}



equalBtn.addEventListener('click',()=>{

    secondNum = display.textContent;
    console.log(secondNum);
    display.textContent = operate(firstNum,secondNum,operand);



});

