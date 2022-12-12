const searchFood=()=>{

const inputField= document.getElementById("inputField");
const inputFieldValue= inputField.value;
inputField.value="";

const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`;

fetch(url)
.then(response=>response.json())
.then(data=>displayMeals(data.meals));

}

const displayMeals=(meals)=>{

    const searchResult= document.getElementById("search-result");

    for( const meal of meals){
        const div= document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`<div onclick="loadMealDetail(${meal.idMeal})" class="card">
           <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
        </div>
      </div>`;

      searchResult.appendChild(div);
    }


}

const loadMealDetail=(mealId)=>{

const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
fetch(url)
.then(response=>response.json())
.then(data=> displayData(data.meals[0]));

}

const displayData=data=>{

const mealdetails= document.getElementById("single-mealDetails");
const div= document.createElement("div");

div.classList.add("cart");

div.innerHTML=`
             <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.strMeal}</h5>
              <p class="card-text">${data.strInstructions.slice(0,150)}</p>
              <a href="${data.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>

`;

mealdetails.appendChild(div);


}