
var elements = document.querySelector('.btn-navigation');
var element = document.querySelectorAll('.barre')
var elementNav = document.querySelector(".navigation")
const main = document.getElementById('main')
const background = document.querySelector('.back-container')

var x = window.matchMedia("(min-width: 768px)")

elements.addEventListener('click', function(){
    element.forEach((element)=>{

        elements.classList.toggle('black')        
        element.classList.toggle('black')
        elementNav.classList.toggle('isOpen')

        if(x.matches){
            main.classList.toggle('marginLeft')
            background.classList.toggle('marginLeftBack')
        }
        
    
    })
})

var mobile = window.matchMedia("(min-width: 768px)");


var btn = document.querySelectorAll(".modal-button-large");

var modals = document.querySelectorAll('.modal');


var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    const modal = document.querySelector(e.target.getAttribute("href"));
    if(mobile.matches){
    e.preventDefault();
    const modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
    }
    else(
        modal.style.display ="none"
    )
 }
}

for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick= function (e) {
    if (e.target.classList.contains('modal')) {
       for(let i in modals){
        if (typeof modals[i].style !== 'undefined') modals[i].style.display = "none";
       };
    }
};


