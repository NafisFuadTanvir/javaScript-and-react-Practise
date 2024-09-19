// list= [10,20,30,40,50,5,24,16,6,93,7]

// const oddNumbers= list.filter((element)=>{
 
//     return element%2!==0
// })


// console.log(oddNumbers)
//filter in products
// const products=[

//     {name:"laptop", price:50000},
//     {name:"desktop", price:70000},
//     {name:"mobile", price:7000},
//     {name:"tablet", price:3000},
// ]

// const highPriceProduct= products.filter((element)=>{

//     return element.price>7000;
// })

// console.log(highPriceProduct)

//stock checking
// const products=[

//     {name:"laptop", price:50000,instock:true},
//     {name:"desktop", price:70000,instock:true},
//     {name:"mobile", price:7000,instock:false},
//     {name:"tablet", price:3000,instock:true},
// ]

// const availableStock= products.filter((product)=> product.instock===true)


// console.log(availableStock)

//Applying search functionality
const products=[

    {name:"laptop", price:50000,instock:true},
    {name:"desktop", price:70000,instock:true},
    {name:"mobile", price:7000,instock:false},
    {name:"tablet", price:3000,instock:true},
]

const searchValue="desktop"

const searchResult= products.filter((product)=> product.name.includes(searchValue))

console.log(searchResult)