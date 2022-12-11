// const names=["Nafis Fuad Tanvir","Tanvir Ahmed","Ashraful haque jihan"];



//    for(let i=0;i<names.length;i++){
//     console.log(names[i]);
//    }

// function myfunction(value){
//     console.log(value);
// }

// names.forEach(myfunction);

//converting array into string:- 
// console.log(names.toString());

//using join method to join with my user given things as parameter:- 
// console.log(names.join(" and "));

// const fruits=["mango","banana","apple"];
// delete fruits[1];
// console.log(fruits);
                              //marging 2 arrays

// const arr1=["Nafis","Fuad","Tanvir"];
// const arr2=["Tanvir","Ahmed"];
// const arr3=["Fuad","Ahmed"];
// let result= arr1.concat(arr2);
// console.log(result);

// for marging 3 arrays just pass the 2 values:

// let res=arr1.concat(arr2,arr3);
// console.log(res);


                  // finding the largest element of the array

//  const a= [10,20,30,40,50,60];
//  let max=a[0];

//  for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         max=a[i];
//     }

//  }
//  console.log(max);

                            //buildin method sort use the alphabaticaly 1st and didnt work on the numeric values

//  const name=["nafis","fuad","tanvir"];
// console.log( name.sort());
//  result is---------->[ 'fuad', 'nafis', 'tanvir' ]

// for numeric values to sort

// const numbers=[5000,10,1000,50,80,90,2000];
// let result= numbers.sort(function(a,b){
//     return a-b;
// })
// console.log(numbers);

// let a=[10,20,30,40,50,60];

// function myfunction(value,index,array){
//     return value>25;
// }
// let over18= a.filter(myfunction);
// console.log(over18);

// const numbers = [4, 9, 16, 25, 29];

// function myFunction(value, index, array) {
//   return value > 18;
// }
// let first = numbers.find(myFunction);
// console.log(first);

// const num= [1,2,3,4,5,6];
// console.log(num.toString());
// console.log(num.join(" - "));

// num.pop();
// console.log(num);
// num.push(1000);
// console.log(num);

// let name1=[1,2,6,5,7,8,6,8];
// let name2=[545,54,656,89,5,98,];

// let newarray= name1.concat(name2);
// console.log(newarray);


// let b=[102,5065,089565,065,650];

// console.log(b.sort(function compare(a,b){
//   return a-b;
// }))

let array=[10,20,50,80,70];

for(let i in array){
  console.log(array[i]);
}