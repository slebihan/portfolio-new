
var elements = document.querySelector(".btn-navigation");
var element = document.querySelectorAll(".barre");
var elementNav = document.querySelector(".navigation");
const competences = document.getElementById("competences");
const background = document.querySelector(".back-container");

var x = window.matchMedia("(min-width: 768px)");
var y = window.matchMedia("(max-width:992px)");

elements.addEventListener("click", function () {
  element.forEach((element) => {
    elements.classList.toggle("black");
    element.classList.toggle("black");
    elementNav.classList.toggle("isOpen");

    if (x.matches && y.matches) {
      competences.classList.toggle("marginLeft");
      background.classList.toggle("marginLeftBack");
    }
  });
});
