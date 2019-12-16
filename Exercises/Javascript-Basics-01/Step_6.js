document.getElementById("validate").addEventListener('click',()=>{
    let firstNumber = document.getElementById("first_number").value;
    let secondNumber = document.getElementById("second_number").value;
    let result = firstNumber % secondNumber;
    alert(`result = ${result}`);
});