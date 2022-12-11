const mymap= new Map([
    [First_name ="Nafis"],
    [Second_name="Fuad"],
    [Third_name ="Tanvir"]

]);

mymap.forEach(function(key,value){
    let text= key + "=" + value;
    return text;
})

