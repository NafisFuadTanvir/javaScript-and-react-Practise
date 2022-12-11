function getPin(){
    const pin= Math.round(Math.random()*10000);
    const pinString= pin + " ";
    if(pinString.length == 5){
        return pin;
    } 
    else{
        return getPin();
    }

}


function genaratePin(){
const pin= getPin();
document.getElementById("displayPin").value= pin;
}

document.getElementById("key-pad").addEventListener("click",function(event){

const number= event.target.innerText;
const calcInput= document.getElementById("typed-numbers");

if (isNaN(number)){
if(number=="C"){
    calcInput.value="";
}

}

else{
    const previousNumber= calcInput.value;
    const newNumber= previousNumber+number;
    calcInput.value= newNumber;
}
})

function verifyPin(){
const genaretedPin= document.getElementById("displayPin").value;
const typedNumbers= document.getElementById("typed-numbers").value;
const notifyGood= document.getElementById("notifySuccess");
const notifyError= document.getElementById("notifyFail");
if(genaretedPin == typedNumbers){
    
    notifyGood.style.display="block";
    notifyError.style.display="none";
}

else{
    
    notifyError.style.display="block";
    notifyGood.style.display="none";
}
}