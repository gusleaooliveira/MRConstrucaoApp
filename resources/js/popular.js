$(window).on("load", () => {
    var largura = window.innerWidth;
    var altura = window.innerHeight;
    var url = "";
        
    if(largura >= 0 && largura <= 600){
        url = "https://api-mrconstrucoesapp.herokuapp.com/imagens/pequeno";
    }    
    else if (largura >= 601 && largura <= 768){
        url = "https://api-mrconstrucoesapp.herokuapp.com/imagens/medio";
    }
    else if (largura >= 769 && largura <= 992){
        url = "https://api-mrconstrucoesapp.herokuapp.com/imagens/grande";        
    }
    else{
        url = "https://api-mrconstrucoesapp.herokuapp.com/imagens/grande";        
    }


    $.ajax({ url: url , success: (resposta)=> {
        let lista  = resposta;

        
    }});        
});
