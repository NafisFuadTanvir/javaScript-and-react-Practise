function getInputValue(inputId){

    const InputField= document.getElementById(inputId);
    const inputValue=InputField.value;
    const inputValueinFloat = parseFloat(inputValue);
    InputField.value="";
    return  inputValueinFloat;

}

function updateTotalField(totalfieldid,floatAmountDep){
   const getDepositField= document.getElementById(totalfieldid);
   const DepositField= getDepositField.innerText;
   const DepositFieldFloatAmount = parseFloat(DepositField);
   getDepositField.innerText= DepositFieldFloatAmount  +  floatAmountDep;

}

function updateBalance(floatAmountDep,isAddition){

   const getBalanceField= document.getElementById("increament-balance");
   const BalanceFieldText= getBalanceField.innerText;
   const BalanceFieldTextFloatAmount= parseFloat(BalanceFieldText);
   if(isAddition==true){
      getBalanceField.innerText=BalanceFieldTextFloatAmount+floatAmountDep;
   }
   else{
      getBalanceField.innerText=BalanceFieldTextFloatAmount-floatAmountDep;
   }

}

//handle deposit button

document.getElementById("deposit_button").addEventListener("click",function(){

//    const depositButtonInputField= document.getElementById("depoist-amount");
//   const depositButtonUserValue=depositButtonInputField.value;
//   const depositButtonUserValueFloatAmount= parseFloat(depositButtonUserValue);
//   depositButtonInputField.value="";
const floatAmountDep= getInputValue("depoist-amount");
if(floatAmountDep>0){
   updateTotalField("increament-deposit",floatAmountDep);
updateBalance(floatAmountDep,true);

}

  //get current deposit
//   const getDepositField= document.getElementById("increament-deposit");
//   const DepositField= getDepositField.innerText;
//   const DepositFieldFloatAmount = parseFloat(DepositField);
//   getDepositField.innerText= DepositFieldFloatAmount+floatAmountDep;



  //adding in balance field
//   const getBalanceField= document.getElementById("increament-balance");
//   const BalanceFieldText= getBalanceField.innerText;
//   const BalanceFieldTextFloatAmount= parseFloat(BalanceFieldText);
//   getBalanceField.innerText=BalanceFieldTextFloatAmount+floatAmountDep;
})

//handle withdrawbutton

document.getElementById("withdraw_button").addEventListener("click",function(){
//    const WithdrawAmountField= document.getElementById("Withdraw-amount");
//    const WithdrawAmountFieldText=WithdrawAmountField.value;
//    WithdrawAmountFloatValue= parseFloat(WithdrawAmountFieldText);
const floatAmountWith= getInputValue("Withdraw-amount");

if(floatAmountWith>0){
   updateTotalField("withdraw-total", floatAmountWith);
   updateBalance( floatAmountWith,false);
}

   // const withdrawDiv= document.getElementById("withdraw-total");
   // const withdrawDivText=withdrawDiv.innerText;
   // const withdrawDivTextFloatAmount= parseFloat(withdrawDivText);
   // withdrawDiv.innerText=withdrawDivTextFloatAmount+floatAmountWith;
//    WithdrawAmountField.value="";


   //update balance after withdraw
//    const getBalanceField= document.getElementById("increament-balance");

// const getBalanceFieldtext= getBalanceField.innerText;
// const getBalanceFieldtextFloatAmount= parseFloat(getBalanceFieldtext);

// getBalanceField.innerText= getBalanceFieldtextFloatAmount-floatAmountWith;

})