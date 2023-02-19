const arrOfObj= [

    {name:"Nafis Fuad Tanvir",age:22,address:"chittagong"},
    {name:"jamil",age:22,address:"chittagong"},
    {name:"Nafis Fuad Tanvir",age:23,address:"chittagong"},
    {name:"Nafis Fuad Tanvir",age:52,address:"chittagong"},
    {name:"Nafis Fuad Tanvir",age:52,address:"chittagong"},


]

const age= arrOfObj.map(name=>name.age);

const na= arrOfObj.map(names=>names.name);

console.log(`the names are:- ${na}`);

// console.log(age);
