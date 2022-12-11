//fetching posts
function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>displayposts(data));

}

loadPosts();
function displayposts(data){
    const postContainer= document.getElementById("postContainer");
    for(const d of data){
        
        const div= document.createElement("div");
        div.classList.add("postStyle");
        div.innerHTML=`
        <h3>Title:- ${d.title} </h3>
        <br>
        <p> Description:- ${d.body} </h3>

        `
       postContainer.appendChild(div);
    }
}