const arrayOfLinks = document.querySelectorAll("a");
const showButton = arrayOfLinks[0];
const hideButton = arrayOfLinks [1];

showButton.addEventListener("click", function() {
  document.querySelector("p").style.display = "none";
});

hideButton.addEventListener("click", function() {
  document.querySelector("p").style.display = "block";
});