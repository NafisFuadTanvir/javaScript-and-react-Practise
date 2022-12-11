
//handle deposit button event
document.getElementById("deposit_button").addEventListener("click",function(){

const deposit_input= document.getElementById("depoist-amount");

const depoist_amount= parseFloat (deposit_input.value);

const increamentDeposit= document.getElementById("increament-deposit");

const previousDeposite= parseFloat(increamentDeposit.innerText);
const newDeposite= previousDeposite + depoist_amount;


increamentDeposit.innerText= newDeposite;

deposit_input.value=" ";

/// update balance
const increamentBalance= document.getElementById("increament-balance");
const balanceTotaltext=  parseFloat(increamentBalance.innerText);
const newBalanceTotal= balanceTotaltext+ depoist_amount;
increamentBalance.innerText= newBalanceTotal;


})

//handle withdraw button event
document.getElementById("withdraw_button").addEventListener("click",function(){

    const withdrawInputField= document.getElementById("Withdraw-amount");
    const withdrawAmountText= withdrawInputField.value;
    const newWithdrawAmount= parseFloat(withdrawAmountText);
    withdrawInputField.value=" ";

    //set withdraw total;
  const withdrawTotal=document.getElementById("withdraw-total");
  const previousWithDrawText= withdrawTotal.innerText;
  const previousWithdrawTotal= parseFloat( previousWithDrawText);
  const newWithDrawTotal= previousWithdrawTotal+newWithdrawAmount;
  withdrawTotal.innerText=newWithDrawTotal;

//update Balance
const balanceTotal= document.getElementById("increament-balance");
const previousbalanceText= balanceTotal.innerText;
const previousbalanceTotal= parseFloat(previousbalanceText);

const newbalanceTotal= previousbalanceTotal -newWithDrawTotal;

balanceTotal.innerText= newbalanceTotal;

})