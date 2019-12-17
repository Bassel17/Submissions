const images = document.querySelectorAll("img");

const imageSwitcherOnMouseOver = ()=>{
    for(let i=0;i<5;i++){
        images[i].addEventListener("mouseover",()=>{
            images[i].src = "images/image"+(i+1)+"_2.jpg";
        });
    }
}
const imageSwitcherOnMouseLeave = ()=>{
    for(let i=0;i<5;i++){
        images[i].addEventListener("mouseleave",()=>{
            images[i].src = "images/image"+(i+1)+".jpg";
        });
    }
}

imageSwitcherOnMouseOver();
imageSwitcherOnMouseLeave();