let leniarsearch=(array,key)=>{
for(let i=0;i<array.length;i++){
    if(array[i]===key){

        console.log("value is:- ", array[i]);

        return  i;
    }
  
}
return "not found";

}


const a=[10,50,804,840,65,54,5,65,656];

console.log(leniarsearch(a,65));


