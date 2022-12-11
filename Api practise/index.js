const ob={
    name: "nafis",
    age: 22,
    address: "shewrapara"
};

console.log(ob);

const stringyfied= JSON.stringify(ob);
console.log(stringyfied);



const shop={
shopName: "Akkas ali shop",
shopAddress: "jakkas ali road",
products: ["apple","mula","gajor"],
profit: 200000
};
console.log(shop);
const shpStringy= JSON.stringify(shop);
console.log(shpStringy);


const realObj=JSON.parse(shpStringy);
console.log(realObj);