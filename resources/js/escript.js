
$(document).ready(function(){

  let displaynone = "display-none-slideshow";
  let lenghtImages = 5;
  for(let i = 0; i < lenghtImages; i++){
    $("#slideshow").append(
      '<div class="'+displaynone+' fade">'+
        '<p class="numbertext">'+i+'/'+lenghtImages+'</p>'+
        '<img src="resources/img/obra/imagem'+i+'.jpg" class="image-slideshow ">'+
        '<p class="caption-text">'+'Obra completa'+'</p>'+
      '</div>'
    );
    $("#slideshowDots").append('<span class="dot" onclick="currentSlides('+i+')"></span>');
  }

  for(let i = 0; i < 29; i++){
    $("#gallery").append('<img src="resources/img/obra/imagem'+i+'.jpg" class="image-gallery" onclick="mostrarImage(\'image'+i+'\')">');
  }
  for(let i = 0; i < 29; i++){
    $("#modals").append(
      '<div class="modal display-none-modal" id="image'+i+'">'+
        '<img src="resources/img/obra/imagem'+i+'.jpg" class="image-modals">'+
        '<a class="close" onclick="mostrarImage(\'image'+i+'\')">'+'<i class="fas fa-times"></i>'+'</a>'+
        '<p class="text-center" id="caption">'+'</p>'+
      '</div>'
    );
  }

  $("label").append("<br>");

});
