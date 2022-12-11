document.getElementById("delete-btn").addEventListener("click",()=>{

    document.getElementById("secretinfo").style.display="none";
})

document.getElementById("delete-confrim").addEventListener("focus",()=>{

    document.body.style.backgroundColor="green";
})

document.getElementById("delete-confrim").addEventListener("blur",()=>{

    document.body.style.backgroundColor="lightcoral";
})


document.getElementById("delete-confrim").addEventListener("keyup",(event)=>{
    const del=document.getElementById("delete-btn");

    if(event.target.value=="delete"){
        del.removeAttribute("disabled");
    }
    else{
        del.setAttribute("disabled",true);
    }
})