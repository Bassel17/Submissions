const images = document.querySelectorAll("img");

const imageSwitcher = ()=>{
    for(let i=0;i<5;i++){
        images[i].addEventListener("mouseover",()=>{
            images[i].src = "images/image"+i+"_2.jpg";
        });
    }
}
imageSwitcher();