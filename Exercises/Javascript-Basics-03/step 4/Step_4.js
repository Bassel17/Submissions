const testButton = document.querySelector("button");

testButton.addEventListener("click", function() {
    let password = document.getElementById("password");
    let confirmationPassword = document.getElementById("confirmation");
    if (password.value != confirmationPassword.value){
        confirmationPassword.style.border = "1px solid red";
        password.style.border = "1px solid red";
    }else{
        confirmationPassword.style.border ="1px solid green";
        password.style.border = "1px solid green";
    } 
});