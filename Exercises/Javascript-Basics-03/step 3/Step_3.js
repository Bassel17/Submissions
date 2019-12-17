const arrayOfColors = document.querySelectorAll(".color");
const green = arrayOfColors[0];
const red = arrayOfColors[1];
const blue = arrayOfColors[2];

green.addEventListener("click", function() {
  document.querySelector("p").style.color = "green";
});
red.addEventListener("click", function() {
  document.querySelector("p").style.color = "red";
});
blue.addEventListener("click", function() {
  document.querySelector("p").style.color = "blue";
});