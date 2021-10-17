'use strict';

const keys=document.querySelectorAll('.key')
const history =document.getElementById('history')
const output=document.getElementById('output')
const signOpreater =document.getElementsByClassName('sign')
console.log(history.innerText)

keys.forEach(key=>key.addEventListener('click',showNumber))

function showNumber(e){
const keyNum=document.querySelector(`div[data-key="${e.target.childNodes[0].textContent}"]`)
if(keyNum.textContent=="C"){
printHistorr("");
printOutput(" ")
}
else{
var outputnum=reverseNumberFormate(output.textContent)
if(outputnum!=NaN){
    outputnum=outputnum+keyNum.textContent;
    printOutput(outputnum)
}
}
}

function printHistorr(num){
    history.innerText=num;
}

function printOutput(num){
    if(num==""){
    output.innerText=num;
    }
    else{
        output.innerText=getFormattedNumber(num);

    }
}

////this function to separate the number by a comma for long numbers////
function getFormattedNumber(num){
let n=Number(num);
let value=n.toLocaleString("en");
console.l
return value
}


///////ro remove the Comma////////
function reverseNumberFormate(num){
    return Number(num.replace(/,/g,''))
}



for(let i=0;i<signOpreater.length;i++){
    signOpreater[i].addEventListener('click',function(){
        console.log(signOpreater[i].textContent)

        var outputnum=output.textContent
        var history1=history.textContent
        console.log(history1.length)

        //  if the input is opreater ...so you can't enter any operation in the history section
if(outputnum=="" && history1!=""){
    if(isNaN(history1[history1.length-1])){
        history1=history1.substr(0,history1.length-1);
    }
    
}

if(outputnum!='' || history1!=''){
    outputnum= outputnum==""?outputnum:reverseNumberFormate(outputnum)
    history1=history1+outputnum

    if(signOpreater[i].textContent =="="){
        var result=eval(history1);
        printOutput(result)
        printHistorr('')
    }else{
        history1=history1+signOpreater[i].textContent;
        printHistorr(history1);
        printOutput('')
    }
}
    
    
    
    
    
  

    

    
 } )
}