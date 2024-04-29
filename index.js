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

function operate(){
    
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
let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(populateDisplay);
let display = document.createElement("div");
let answer = document.createElement("div");
let clearBtn = document.querySelector('.clear');
let operandBtn = document.querySelectorAll('.operand');
let equalBtn = document.querySelector('.equals')
operandBtn.forEach(operandBtnFunc);
let i = 0;


clearBtn.addEventListener("click",()=>{
    firstNum= '';
    secondNum= '';
    operand= '';
    display.textContent = '';
    answer.textContent = '';
    i=0;

})


function populateDisplay(el){
    el.addEventListener("click",()=>{
        answer.textContent = '';
        display.textContent += el.textContent;
        body.appendChild(display);
    });
}


function operandBtnFunc(el){
    el.addEventListener('click',()=>{

        if(i<1){

            if(display.textContent !== ''){    
                firstNum = display.textContent;
            }     
                   
            //displayContainer = display.textContent;
            operand = el.textContent
        }

     
        if(i >= 1){

            if(output){
                firstNum=output;
                operand = el.textContent;

            }
            if(display.textContent == '' && output){    
                secondNum=output;
                operand = el.textContent;
            }
            if(display.textContent == ''){
                secondNum=firstNum;
            }
       
            else{
                secondNum = display.textContent;
            } 
            if(isNaN(firstNum)){
                firstNum=secondNum;
            }
            getResult();
        }

       display.textContent='';     

        i++;
    })
}

equalBtn.addEventListener('click',getResult);
equalBtn.addEventListener('click',()=>{
    i = 0;
});


function getResult(){
    
    //secondDisplayContainer =display.textContent;
    if(display.textContent !== ''){    
        secondNum = display.textContent;
    }
    
    display.textContent='';       
    answer.textContent = operate();
    output = answer.textContent;
    body.appendChild(answer);


    console.log(operand);
    console.log(firstNum);
    console.log(secondNum);
}
