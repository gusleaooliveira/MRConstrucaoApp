let slideIndex = 1;


function plusSlides(n) { showSlides(slideIndex += n); }

function currentSlides(n) { showSlides(slideIndex = n); }

function showSlides(n) {
  // console.log(slideIndex);

  let i;
  let slides = document.getElementsByClassName("display-none-slideshow");
  let dots = document.getElementsByClassName("dot");

  if(n > slides.length){ slideIndex = 1; }
  if(n < 1){ slideIndex = slides.length; }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";
}


function mostrar(id) {
  let mostrar = document.querySelector('#'+id);
  mostrar.style.display = null;
  // console.log(mostrar);
  mostrar.classList.toggle("display-none");
}
function mostrarImage(id) {
  let mostrar = document.querySelector('#'+id);
  mostrar.style.display = null;
  // console.log(mostrar);
  mostrar.classList.toggle("display-none-modal");
}

function stickyScreen() {
  let barra = document.querySelector("#bar");

  if(screen.width <= 500){
    console.log('Tela:'+screen.width);
    bar.classList.remove("sticky-top");
    bar.classList.remove("bar-sticky-normal");
    bar.classList.add("bar-sticky-mobile");
  }
  else{
    console.log('Tela:'+screen.width);
    bar.classList.remove("sticky-top");
    bar.classList.remove("bar-sticky-mobile");
    bar.classList.add("bar-sticky-normal");
  }
  console.log();
  console.log(bar.classList);
  console.log();
}
