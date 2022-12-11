const numbers=[10,50,8,0,62,089,5,6,9,5];

const n= numbers.filter(number=> number>50);
console.log(n);

const products=[
    {name: "akkas", price: 2000, avaialbe: "yes"},
    {name: "akkas", price: 5000, avaialbe: "yes"},
    {name: "akkas", price: 6000, avaialbe: "no"},
    {name: "akkas", price: 9000, avaialbe: "no"},
    {name: "akkas", price: 28000, avaialbe: "yes"},

]

const expensive= products.filter(pro=>pro.price>2000);

const avaialb=products.filter(avail=>avail.avaialbe=="yes");
console.log(expensive);
console.log(avaialb);