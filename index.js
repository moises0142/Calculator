let firstNum;
let operand;
let secondNum;
let output;
let num;
function operate(){
    
    if(operand == ('+')){
        num= +firstNum+ +secondNum;
        result = Math.round(num*1000)/1000;
        return result;
    }

    if(operand == ('-')){
        num= +firstNum - +secondNum;
        result = Math.round(num*1000)/1000;
        return result;
    }

    if(operand == ('x')){
        num= +firstNum * +secondNum;
        result = Math.round(num*1000)/1000;
        return result;
    }  

    if(operand == ('/')){          
        if(secondNum == 0){
            return "ayooo";
        }
        num= +firstNum / +secondNum;
        result = Math.round(num*1000)/1000;
        return result;
    }
}

let body = document.querySelector("body");
let displayHtml = document.querySelector(".displayHtml")
let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(populateDisplay);
let display = document.createElement("div");
let answer = document.createElement("div");
let clearBtn = document.querySelector('.clear');
let operandBtn = document.querySelectorAll('.one');
let equalBtn = document.querySelector('.equals')
operandBtn.forEach(operandBtnFunc);
let i = 0;
let dot = document.querySelector(".dot");
let backspace = document.querySelector(".backSpace");
let displayContainer;
let plusOrMinus = document.querySelector(".plusOrMinus")
let displayZero=document.createElement("div")

clearBtn.addEventListener("click",()=>{
    firstNum= '';
    secondNum= '';
    operand= '';
    output='';
    display.textContent = '';
    answer.textContent = '';
    i=0;
    displayZero.textContent = 0;

    displayHtml.appendChild(displayZero);

})

displayZero.textContent = 0;
displayHtml.appendChild(displayZero);





function populateDisplay(el){
    el.addEventListener("click",()=>{
        displayZero.textContent='';
        answer.textContent = '';
        display.textContent += el.textContent;
        displayContainer = display.textContent;
        displayHtml.appendChild(display);
    });
}


function operandBtnFunc(el){
    el.addEventListener('click',()=>{

        if(i<1){

            if(display.textContent !== ''){    
                firstNum = display.textContent;
            }     
                   
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
                operand = el.textContent;

            }
            else{
                secondNum = display.textContent;
                operand = el.textContent;

            } 
            if(isNaN(firstNum)){
                firstNum=secondNum;
            }
      
            getResult();
        }
        display.textContent='';
        //answer.textContent=firstNum;
        //displayHtml.appendChild(answer);

            

        i++;
    })
}

equalBtn.addEventListener('click',getResult);
equalBtn.addEventListener('click',()=>{
    i = 0;
});


function getResult(){
    
    if(display.textContent !== ''){    
        secondNum = display.textContent;
    }   
    if(isNaN(secondNum)){
        secondNum=firstNum
    }
    if(isNaN(firstNum)){
        firstNum=secondNum
    }
    if(isNaN(firstNum) && isNaN(secondNum)){
        firstNum=0;
        secondNum=0;
    }
    display.textContent='';       
    answer.textContent = operate();
    output = answer.textContent;
    displayHtml.appendChild(answer);
    console.log(operand)
    console.log(firstNum)
    console.log(secondNum)
    console.log(answer.textContent)

}

backspace.addEventListener("click",()=>{
    if(output){
        placeHolder = output.slice(0,-1);
        answer.textContent=placeHolder;
        output=placeHolder;
    
        displayHtml.appendChild(answer);
    } 
    else{   
    secondPlaceHolder = displayContainer.slice(0,-1);    
    display.textContent=secondPlaceHolder;
    displayContainer=secondPlaceHolder;

    displayHtml.appendChild(display);
    }
});

plusOrMinus.addEventListener("click",()=>{
    display.textContent = - + display.textContent;
})
if(navigator.userAgent.match(/iPhone/i)){
    body.classList.add("iphoneWidth");
}
else{
    body.classList.remove('iphoneWidth');
}