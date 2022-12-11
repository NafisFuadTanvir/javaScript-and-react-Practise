const paymentSuccess= true;
const marks=70;
function enroll(){
    console.log("Course enrollment is in progress");
    const promise= new Promise(function(reslove,reject){
        setTimeout(function(){
            if(paymentSuccess){
                reslove();
            }else{
                reject("payment failed");
            }
        })
    },2000)  
    return promise;
}

function progress(){
    console.log("course on progress");
   const promise= new Promise(function(reslove,reject){

    setTimeout(function(){
        if(marks>=80){
            reslove();
        }
        else{
            reject("you cannot get enough number");
        }

    },2000)

   })
   return promise;

    
}