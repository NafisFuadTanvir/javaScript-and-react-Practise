//always use const when declare a object data type, it is helpfull

// const car={
//     name: "Ferrari",
//     model: 500,
//     weight: "850kg",
//     color: "white",
//     start: function(){
//         console.log("Car is Started");
//     },
//    stop: function(){
//     console.log("car has stopped");
//    }
// };

// console.log(car.name);
// car.start();

// const person={
//     firstName: "Nafis",
//     secondName: "Fuad",
//     thirdName: "Tanvir",
//     print: function(){
//         console.log("My Full Name is:-" firstName,+secondName,+thirdName);
//     }
// };
// console.log(person.print());

const student={
    name :"Nafis Fuad Tanvir",
    id : 201002437,
    birth_year : 2010,
    work: function(){
        return this.name + " " + "is a student";
    }
};

console.log(student.work());