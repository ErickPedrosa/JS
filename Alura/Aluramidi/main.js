function tocaSom(idTagAudio){
    document.querySelector(idTagAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");


let counter = 0;

while (counter < listaDeTeclas.length) {

    listaDeTeclas[counter].onclick = tocaSom;


    counter ++;

    console.log(counter);
}