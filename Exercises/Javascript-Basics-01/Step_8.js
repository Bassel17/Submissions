const button = document.getElementById("validate");
button.addEventListener('click',()=>{
    const age = document.getElementById("age").value;
    isOver18(age);
});

const isOver18 = (age)=>{
    if(age >= 18){
        alert("you are over 18");
    }else{
        alert("you are under 18");
    }
}