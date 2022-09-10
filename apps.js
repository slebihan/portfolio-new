// $(document).ready(function(){
//     $('.btn-navigation').click(function(){
//         $(this).find('.barre').toggleClass('white')
//        $('.navigation').toggleClass('isOpen')
//     });
// });

function animation() {
    var elementanim = document.getElementById("anim");
    elementanim.style.animation = "open-bg 2s forwards";
    var element1 = document.getElementById("anim-2");
    element1.style.animation = "open-bg-1 2s forwards";
    var element3 = document.getElementById("button");
    element3.style.opacity = 0;
    element3.style.transition = "opacity 0.8s linear";
    element3.remove();
    var element4 = document.getElementById('home-container')
    element4.style.opacity = 1
  }

var elements = document.querySelector('.btn-navigation');
var element = document.querySelectorAll('.barre')
var elementNav = document.querySelector(".navigation")
// const circleMenu = document.querySelector('.circle-menu')
// const circleAnim = document.querySelector('.circle-anim')
const main = document.getElementById('main')
const competences = document.getElementById('competences')
const frontend = document.getElementById('frontend')
const backend = document.getElementById('backend')

// var cursor = document.getElementById("cursor");
// document.body.addEventListener("mousemove", function(e) {
//   cursor.style.left = e.clientX + "px",
//     cursor.style.top = e.clientY + "px";
// });

var x = window.matchMedia("(max-width: 768px)")

button.addEventListener('click',function(){
    frontend.classList.toggle('animateFront')
    backend.classList.toggle('animateBack')
})

elements.addEventListener('click', function(){
    element.forEach((element)=>{

        elements.classList.toggle('black')        
        element.classList.toggle('black')
        elementNav.classList.toggle('isOpen')
        
        if(x.matches){
            main.classList.toggle('marginLeft')
        }
        main.classList.toggle('marginLeft')
    })
})


// elements.addEventListener('click',()=>{
//     if(x.matches){
//     circleMenu.classList.toggle('circle-anim')
//     }
// })
