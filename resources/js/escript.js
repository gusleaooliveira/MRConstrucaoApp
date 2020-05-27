
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
    $("#gallery").append('<img src="resources/img/obra/imagem'+i+'.jpg" class="image-gallery ">');
  }

  $("label").append("<br>");

});
