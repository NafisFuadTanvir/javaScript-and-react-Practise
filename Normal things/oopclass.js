class Person{
   constructor(name,year,cgpa){
    this.name=name;
    this.year=year;
    this.cgpa=cgpa;
   
   }
    display=()=> {
        console.log("name is:- ", this.name);
        console.log("year is: -",this.year);
        console.log("cgpa is:- ",this.cgpa);
    }
}
const member= new Person("nafis fuad tanvir",2020,3.50);
member.display();
