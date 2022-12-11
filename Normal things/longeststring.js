function longeststring(str){
    let long="";
    let l=str.length;
    for(let i=0;i<l;i++){
        if(long<str[i]){
            long=str[i];
        }
    }
    return long;

}

let mystring=["Nafis","Nafis Fuad Tanvir","amar nam nafis","Ahmed Fuad"];
console.log(longeststring(mystring));
