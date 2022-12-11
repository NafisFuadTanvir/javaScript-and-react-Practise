document.getElementById("submit").addEventListener("click",()=>{
    const cmnt= document.getElementById("add-cmnt");
//get user comment
    const userComment= cmnt.value;

    //step3
    const newComment= document.createElement("p");
    newComment.innerText=userComment;

    //append the comment
    const commentConatiner= document.getElementById("comment");
    commentConatiner.appendChild(newComment);

    //clean text area
    cmnt.value="";
})