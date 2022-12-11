let x="50";
try{
    if(x==0) throw "empty";
    if(x<5) throw "to low";
    if(x>5) throw "to high";
}catch(err){
    console.log(err);
}