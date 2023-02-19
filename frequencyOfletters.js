let paragraph= "i am nafis fuad tanvir";
let count={};

let withoutspace= paragraph.replace(/\s/g,"");

let arrayOfletters= withoutspace.split("");

for(let i=0;i<arrayOfletters.length;i++){
    let letter= arrayOfletters[i];
    if(count[letter]==undefined){
        count[letter]=1;
    }
    else{
        count[letter]= count[letter]+1;
    }
}

console.log(count);