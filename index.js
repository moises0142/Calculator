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
let buttons = document.querySelectorAll("button");
buttons.forEach(populateDisplay);
let display = document.createElement("div");
let textContainer= '';
let clearBtn = document.querySelector('.clear');
let plusBtn = document.querySelector('.p');



clearBtn.addEventListener("click",()=>{
    firstNum= '';
    secondNum= '';
    operand= '';
    display.textContent = '';
    textContainer= '';
})

function populateDisplay(el){
    el.addEventListener("click",()=>{
        textContainer += el.textContent;

        display.textContent += el.textContent;
        let displayContainer = `${display.textContent}`;

        if(displayContainer.includes('+')||displayContainer.includes('/')||displayContainer.includes('*')){
            makeVar(displayContainer);

        }
        if(displayContainer.includes('=')){
            makeVar2RunOperation(displayContainer);
        }
        body.appendChild(display);
        console.log(textContainer)
    });
}



function makeVar(item){
    operand = item.slice(-1);
    justNumber =item.slice(0,-1);
    firstNum= justNumber;

    display.textContent='';
}
function makeVar2RunOperation(item){
    justNumber =item.slice(0,-1);
    secondNum= justNumber;
    display.textContent = operate(firstNum,secondNum,operand);

}