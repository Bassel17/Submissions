const magic = (shoeSize, birthYear)=>{
    return ((((shoeSize*2)+5)*50)-birthYear)+1766;
}

document.getElementById("validate").addEventListener('click',()=>{
    const shoeSize = document.getElementById("shoe_size").value;
    const year = document.getElementById("year").value;
    const result = magic(shoeSize,year);
    alert(`result = ${result}`);  
});