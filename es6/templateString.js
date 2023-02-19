const arr=[10,02,50,60,40,70];

const person={
name:"Nafis Fuad Tanvir",
age: 22,
liked_Movies: ["iron man","Batman"]

};


const about= `This persons name is-->${person.name} and his age is-->${person.age} and he like the movie which name is-->${person.liked_Movies[1]} now i am try to fetch a data from the array
which is--> ${arr[2]}`;

console.log(about);

//create a new array from an old array and adding a number
const newrr= [...arr,5000];
console.log(newrr);