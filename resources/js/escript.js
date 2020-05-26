
$(document).ready(function(){

  let displaynone = "display-none";
  let lenghtImages = 5;
  for(let i = 0; i < lenghtImages; i++){
    if(i == 0){displaynone = ""; }
    else{displaynone = "display-none";}
    $("#slideshow").append(
      '<div class="'+displaynone+'">'+
        '<p class="numbertext">'+i+'/'+lenghtImages+'</p>'+
        '<img src="resources/img/obra/imagem'+i+'.jpg" class="image-slideshow ">'+
        '<p class="caption-text">'+'Imagem de demonstração'+'</p>'+
      '</div>'
    );
    $("#slideshowDots").append('<span class="dot" onclick="currentSlides('+i+')"></span>');
  }

  for(let i = 0; i < 29; i++){
    $("#gallery").append('<img src="resources/img/obra/imagem'+i+'.jpg" class="image-gallery ">');
  }

  $("label").append("<br>");

});
