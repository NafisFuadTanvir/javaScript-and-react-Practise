function changeBodyColor(){
    document.body.style.backgroundColor='olive'
}
function changeBodyColoryellow(){
    document.body.style.backgroundColor='yellow'
}

const green= document.getElementById("green-btn");
green.onclick= function(){
    document.body.style.backgroundColor='green';
}
document.getElementById("pink").addEventListener("click",()=>{
    document.body.style.backgroundColor="pink";
})