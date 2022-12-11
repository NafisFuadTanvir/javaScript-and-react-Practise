function updateCaseNumber(Product,isIncreaseing){

    const caseCounter= document.getElementById(Product + "-counter");
    let caseCounterValue= caseCounter.value;

    if(isIncreaseing==true)
    {
        caseCounterValue= parseInt(caseCounterValue)+1;

    }
    else if(caseCounterValue>0){
        caseCounterValue= parseInt(caseCounterValue)-1;
    }

     caseCounter.value=caseCounterValue;
   
    //update case total
    const caseTotal= document.getElementById("case-total");
    caseTotal.innerText= caseCounterValue * 59;


}

// for casing
document.getElementById("case-plus").addEventListener("click",function(){
   
    updateCaseNumber('case',true);
    
   
})
document.getElementById("case-minus").addEventListener("click",function(){
    updateCaseNumber('case',false);
   
})

//for phone

document.getElementById("phone-plus").addEventListener("click",function(){

    updateCaseNumber('phone',true);
    

})


document.getElementById("phone-minus").addEventListener("click",function(){
    updateCaseNumber('phone',false);


})