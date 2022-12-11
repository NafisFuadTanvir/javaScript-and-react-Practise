let loadData=()=>{

    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(data=>displayData(data));
}

loadData();

let displayData=(data)=>{


    const parent= document.getElementById("maindiv");
    parent.classList.add("co");
    for(let i=0;i<data.length;i++){

        console.log(data);
          const h3= document.createElement("h3");
     h3.innerText=`Name is ${data[0].altSpellings}`;
     parent.appendChild(h3);
    }


}