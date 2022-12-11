//normal work
const numbers=[10,205,40,80,60,4];
const output=[];
for(const number of numbers){
    const result=number;
    output.push(result);
}

console.log(output);


//map work
// const names=["nafis","fuad","tanvir"];
// const output2= names.map(()=>names);
// console.log(output2);
const num=[1,2,3,4,5];
const out=num.map((a)=>{
    return a*2;
})

console.log(out);