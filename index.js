let  billAmount  = document.getElementById("billAmount");
let percentageTiP = document.getElementById("percentageTiP");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMsg = document.getElementById("errorMsg");

function calculateBill(){
    if(billAmount.value === "" || isNaN(billAmount.value)){
         errorMsg.textContent = "Please Enter a Valid Input."
         errorMsg.style.color = "red";
    }else if(percentageTiP.value === "" || isNaN(percentageTiP.value)){
        errorMsg.textContent = "Please Enter a Valid Input."
         errorMsg.style.color = "red";
    }else{
        let tip = (parseInt(percentageTiP.value)/100)*parseInt(billAmount.value);
        let calculatedAmount = parseInt(billAmount.value)  + tip;

        totalAmount.value = calculatedAmount;
        tipAmount.value = tip;
        errorMsg.textContent = "";
    }
}