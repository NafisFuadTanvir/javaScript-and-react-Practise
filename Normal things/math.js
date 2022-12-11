
// while(1){
//     let a= Math.floor(Math.random()*10);
//     console.log(a);
// }
// function randomGenaretor(min,max){
//     return Math.floor(Math.random() * (max-min)) +min;
// }
// console.log(randomGenaretor(50,100));

// function dosort(a,b){
//     return a-b;
// }

// const a= [20,30,4,500,80,70];
// console.log(a.sort(dosort));

let a=[10,2030,4054,059,54];
let max=0;
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
console.log("the maximam number is", max);