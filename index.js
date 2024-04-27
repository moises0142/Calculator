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

function operate(string){
    string.pop();
    console.log(string);
    let newArray = [];
    
    
    if(string.includes('+')){
        newArray = string.join(''); 

        nuevoString =newArray.split('+')
        console.log(nuevoString);
        num1 = nuevoString[0];
        num2= nuevoString[1];
        result = add(num1,num2);
        return result;
    }

    if(string.includes('-')){
        newArray = string.join(''); 

        nuevoString =newArray.split('-')
        num1 = nuevoString[0];
        num2= nuevoString[1];
        result = subtract(num1,num2);
        return result;
    }
    if(string.includes('*')){
        newArray = string.join(''); 

        nuevoString =newArray.split('*')
        num1 = nuevoString[0];
        num2= nuevoString[1];
        result = multiply(num1,num2);
        return result;
    }    
    if(string.includes('/')){    
        newArray = string.join(''); 

        nuevoString =newArray.split('/')
        num1 = nuevoString[0];
        num2= nuevoString[1];
        result = divide(num1,num2);
        return result;
    }

}
let body = document.querySelector("body");
let buttons = document.querySelectorAll("button");
buttons.forEach(populateDisplay);
let display = document.createElement("div");

function populateDisplay(el){
    el.addEventListener("click",()=>{
        display.textContent += el.textContent;
        body.appendChild(display);
        let yomama = `${display.textContent}`;
        console.log(yomama);
        let array = yomama.split('');
        console.log(array);
        if(array.includes('='||'+','+'1)){
            display.textContent = operate(array);
        }
    });
}