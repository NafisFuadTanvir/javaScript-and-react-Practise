//event handler on submit button

document.getElementById("submit_button").addEventListener("click",function(){

    //get user email
const emailField= document.getElementById("email");
const userEmail= emailField.value;

    //get user password

    const passwordField= document.getElementById("password");
    const userPassword= passwordField.value;
    
    if(userEmail=="nafisf026@gmail.com" && userPassword==12345){
               window.location.href="banking.html";
    }
    
})