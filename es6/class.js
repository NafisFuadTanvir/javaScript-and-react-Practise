class car{

     name;
    age;
    color;
    constructor(name,age,color){
        this.name=name;
        this.age=age;
        this.color=color;
    }

    myclass(){
          console.log(this.name + " is running");
    }

}

let car1=new car("akkas",20,"red");
let car2= new car("nafis",50,"blue");

car1.myclass();
console.log(car2);