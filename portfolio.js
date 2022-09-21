// $(document).ready(function(){
//     $('.btn-navigation').click(function(){
//         $(this).find('.barre').toggleClass('white')
//        $('.navigation').toggleClass('isOpen')
//     });
// });



//   let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");

//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";

// }



var elements = document.querySelector('.btn-navigation');
var element = document.querySelectorAll('.barre')
var elementNav = document.querySelector(".navigation")
const main = document.getElementById('main')
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


//  window.onresize = function() {    
//         var widthWin = window.document.body.clientWidth;
//         console.log(widthWin); 
                
//     }

var mobile = window.matchMedia("(min-width: 768px)");

// Get the button that opens the modal
var btn = document.querySelectorAll(".modal-button-large");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
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

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}



// elements.addEventListener('click',()=>{
//     if(x.matches){
//     circleMenu.classList.toggle('circle-anim')
//     }
// })
