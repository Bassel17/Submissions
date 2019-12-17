const resetButton = document.querySelector("button");
resetButton.addEventListener("click",()=>{
    const agreement = window.confirm('Are you sure you want to reset');
    if(agreement){
        clearInputElements();
    }
});

function clearInputElements(){
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const city = document.querySelector("#city");
    name.value="";
    surname.value="";
    city.value = "";
}