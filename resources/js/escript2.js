let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }

function currentSlides(n) { showSlides(slideIndex = n); }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("display-none");
  let dots = document.getElementsByClassName("dot");
  console.log(dots);
  if(n > slides.length){ slideIndex = 1; }
  if(n < 1){ slideIndex = slides.length }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i]
  }
}
