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
const circleMenu = document.querySelector('.circle-menu')
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

// elements.addEventListener('click',()=>{
//     if(x.matches){
//     circleMenu.classList.toggle('circle-anim')
//     }
// })
