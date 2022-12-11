const names=[ "Nafis","Fuad","Tanvir"];
const namesLength= names.map((name)=>name.length);
console.log(namesLength);

const products=[
    {name:'Chips', price:`20 taka` },
    {name:'potato', price:`20 taka` },
    {name:'crackers', price:`20 taka` },
    {name:'alu', price:`20 taka` }
]

const productsName= products.map((name)=>name.name);

console.log(productsName);