/*Factorial of a positive integer (number) is the sum of multiplication of all the integers smaller than that positive integer. For example, factorial of 5 is 5 * 4 * 3 * 2 * 1 which equals to 120.*/

// let num=12;

// for(let i=num;i>1;){
//      i=i-1;
//     var fact= num * i;
//     num = fact;
// }

// console.log(fact);

//anothe method

let num=12;
for(var fact=1;num>1;num--){
fact= fact*num;

}

console.log(fact);