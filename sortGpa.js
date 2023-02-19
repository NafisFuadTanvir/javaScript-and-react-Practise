// let maxSpeed = {
//     car: 300, 
//     bike: 60, 
//     motorbike: 200, 
//     airplane: 1000,
//     helicopter: 400, 
//     rocket: 8 * 60 * 60
// };
// let sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });


let gpa={
    Nafis:50,
    Minmoy:30,
    Nahim:60,
    Sifat: 40,
    Arfat:80
};

let sorted=[];
for(let g in gpa){
    sorted.push([g,gpa[g]]);
}

sorted.sort(function (a,b){
    return a[1]-b[1];
});

console.log(sorted);
let rev= sorted.reverse();
console.log(rev);