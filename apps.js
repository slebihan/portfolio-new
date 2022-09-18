// $(document).ready(function(){
//     $('.btn-navigation').click(function(){
//         $(this).find('.barre').toggleClass('white')
//        $('.navigation').toggleClass('isOpen')
//     });
// });

var elements = document.querySelector(".btn-navigation");
var element = document.querySelectorAll(".barre");
var elementNav = document.querySelector(".navigation");
// const circleMenu = document.querySelector('.circle-menu')
// const circleAnim = document.querySelector('.circle-anim')
const main = document.getElementById("main");
const competences = document.getElementById("competences");
const background = document.querySelector(".back-container");

// var cursor = document.getElementById("cursor");
// document.body.addEventListener("mousemove", function(e) {
//   cursor.style.left = e.clientX + "px",
//     cursor.style.top = e.clientY + "px";
// });

var x = window.matchMedia("(min-width: 768px)");
var y = window.matchMedia("(max-width:992px)");

elements.addEventListener("click", function () {
  element.forEach((element) => {
    elements.classList.toggle("black");
    element.classList.toggle("black");
    elementNav.classList.toggle("isOpen");

    if (x.matches && y.matches) {
      main.classList.toggle("marginLeft");
      background.classList.toggle("marginLeftBack");
    }
  });
});

// elements.addEventListener('click',()=>{
//     if(x.matches){
//     circleMenu.classList.toggle('circle-anim')
//     }
// })
