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
const background = document.querySelector('.back-container')

var x = window.matchMedia("(min-width: 768px)")
var y = window.matchMedia("(max-width:992px)")

elements.addEventListener('click', function(){
    element.forEach((element)=>{

        elements.classList.toggle('black')        
        element.classList.toggle('black')
        elementNav.classList.toggle('isOpen')
        
        if(x.matches && y.matches){
            main.classList.toggle('marginLeft')
            background.classList.toggle('marginLeftBack')
        }
    })
})