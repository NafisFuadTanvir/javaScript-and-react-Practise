function changetext(){
    const p= document.getElementById("using function");
    p.innerText="amar name nafis";
    p.style.color="red";
}

document.getElementById("direct-handled").addEventListener("click",()=>{
    const p= document.getElementById("using function");
    p.innerHTML="ami parsi vay";
    p.style.backgroundColor="yellow";

})

document.getElementById("updet_btn").addEventListener("click",()=>{
    const text= document.getElementById("textfield");
    const p= document.getElementById("using function");
    p.innerText=text.value;
    
})