 //What is a prime number for kids?
// A prime number is a whole number greater than 1 with only two factors – themselves and 1. A prime number cannot be divided by any other positive integers without leaving a remainder, decimal or fraction. An example of a prime number is 13


let num=5;

let isPrime= true;
for(let i=2;i<num;i++){

    if(num%i==0){
        isPrime=false;
    }
}

if(isPrime==true){
    console.log(`${num} is a prime number`);
}
else{
    console.log(`${num} is not a prime number`);

}