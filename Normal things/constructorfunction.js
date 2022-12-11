function person(first,last,age,sallary){
    this.firstname= first;
    this.lastname= last;
    this.age=age;
    this.sallary=sallary;
}


const nafis= new person("Nafis","Fuad",20,"50 k");
console.log(nafis);

const jihan= new person("Ashraful","Jihan","20","1 lakh");
console.log(jihan);
nafis.country="Bangladesh";
console.log(nafis);