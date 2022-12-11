document.getElementById("qoute-btn").addEventListener("click",()=>{


    let loadData=()=>{
        fetch("https://api.kanye.rest/")
        .then(response=>response.json())
        .then(data=>workWithData(data));

    }
    
   
  function workWithData(data){
   let qoute= document.getElementById("qoute");
   qoute.classList.add("qouteStyle");
   qoute.innerText=data.quote;
  }

  loadData();

})