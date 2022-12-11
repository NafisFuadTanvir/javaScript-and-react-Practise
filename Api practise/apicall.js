function fetchingData(){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


}

function loadUsers(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>console.log(data));


}

function getPosrs(){

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then((data)=>{

const title =document.getElementById("titels");
for(const d of data){
    const li= document.createElement("li");
    li.innerText= `Title:- ${d.title} Id:- ${d.id}`;
    title.appendChild(li);
}

});
}
