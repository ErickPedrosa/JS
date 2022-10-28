function tocaSom(idTagAudio){
    let audio = document.querySelector(idTagAudio);
    
    if(audio !== null){
        if(audio.localName === "audio"){
            audio.play();
        }else{
            console.log("O Elemento não é um áudio para ser reprodizido.");
        }
        
    }else{
        console.log("Elemento não encontrado.");
    }

}

const listaDeTeclas = document.querySelectorAll(".tecla");


for(let counter = 0; counter < listaDeTeclas.length; counter++){

    let tecla = listaDeTeclas[counter];
    let instrumento = tecla.classList[1];
    let idTagAudio = `#som_${instrumento}`

    tecla.onclick = function () { tocaSom(idTagAudio); }


    tecla.onkeydown = function (event) {
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (event) {
        if(event.code === 'Space' || event.code === "Enter"){
            tecla.classList.remove('ativa');

        }
    }

}

