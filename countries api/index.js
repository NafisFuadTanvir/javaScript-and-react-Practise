const loadCounties=()=>{

    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>display(data));
}

const display=(countries)=>{

console.log(countries[0]);

const allcountriesHtml=countries.map(country=>getcountyHtml(country));
// console.log(allcountriesHtml);

const container= document.getElementById("con");
container.innerHTML=allcountriesHtml.join(" ");

}

//original one
// const getcountyHtml= (country)=>{

// return `

//  <div class="countrieeee">
//  <h2>${country.name.common}</h2>
//      <img src="${country.flags.png}">
//  </div>

// `}

//destructuring option one
// const getcountyHtml= (country)=>{

//     const {name,flags}=country;

//     return `
    
//      <div class="countrieeee">
//      <h2>${name.common}</h2>
//          <img src="${flags.png}">
//      </div>
    
//     `}

//destructuring option two
const getcountyHtml= ({name,flags,capital,region})=>{

    return `
    
     <div class="countrieeee">
     <h2>${name.common}</h2>
     <p>captial :${capital}</p>
     <p>region :${region}</p>
         <img src="${flags.png}">
     </div>
    
    `}


loadCounties();