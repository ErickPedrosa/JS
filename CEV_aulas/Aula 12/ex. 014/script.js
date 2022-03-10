function carregar(){
    var msg = window.document.querySelector("div#msg");
    var img = window.document.querySelector("img#imagem");
    var agora = new Date();
    var hora = agora.getHours();

    
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`;

    if (hora < 12) {
        img.src = "Imagens/Dia.png";
        document.body.style.background = "#d7b455";

    }else if (hora < 18) {
        img.src = "Imagens/Tarde.png";
        document.body.style.background = "#fe977c"
       
    }else if (hora >= 18){
        img.src = "Imagens/Noite.png";
        document.body.style.background = "#142c34"
      
    }
}