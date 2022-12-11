const obj={
    firstname:"Nafis",
    lastname: "Fuad",
    get fullname(){
        return this.firstname + " " + this.lastname;
    }
};

console.log(obj.fullname);