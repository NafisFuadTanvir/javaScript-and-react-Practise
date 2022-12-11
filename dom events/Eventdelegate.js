// const items= document.getElementsByClassName("item");

// for(i of items){
//     i.addEventListener("click",function(event){

//             event.target.parentNode.removeChild(event.target);

//     })
// }

document.getElementById("btn").addEventListener("click",function(){


    const li= document.createElement("li");
    li.innerText="Brand new item";
    const parent= document.getElementById("item_container");
    parent.appendChild(li);
})

document.getElementById("item_container").addEventListener("click",function(event){
event.target.parentNode.removeChild(event.target);

})