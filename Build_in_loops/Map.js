// const products=[

//     {name:"laptop", price:50000,instock:true},
//     {name:"desktop", price:70000,instock:true},
//     {name:"mobile", price:7000,instock:false},
//     {name:"tablet", price:3000,instock:true},
// ]


// ProductsName= products.map((product)=> product.name)

// console.log(ProductsName)

//Discount price
const products=[

    {name:"laptop", price:50000,instock:true},
    {name:"desktop", price:70000,instock:true},
    {name:"mobile", price:7000,instock:false},
    {name:"tablet", price:3000,instock:true},
]

// const discountprice= products.map((product)=>
//     (
//         {
//             name: product.name,
//             discountPrice: product.price*0.9,
//         }
//     )
// )
// console.log(discountprice)

const information= products.map((product)=> `${product.name} price is ${product.price}`)

console.log(information)