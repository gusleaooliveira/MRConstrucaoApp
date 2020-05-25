
$(document).ready(function(){

  for(let i = 0; i < 5; i++){

    $("#slideshow").append('<img src="resources/img/obra/imagem'+i+'.jpg" class="image-slideshow">');
  }

  for(let i = 0; i < 29; i++){
    $("#gallery").append('<img src="resources/img/obra/imagem'+i+'.jpg" class="image-gallery ">');
  }

  $("label").append("<br>");

});
