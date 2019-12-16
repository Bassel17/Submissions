const div = document.createElement("div");
document.body.appendChild(div);
const nameInput = document.querySelector("#name");
nameInput.addEventListener("change",()=>{
    div.innerHTML = nameInput.value;
});