
var i = 0;

function fuiClicado(){
    i++;
    resultado.innerText = "Eu fui clicado " + i + " vezes.";
}

const botao = document.querySelector("#calcular");
const resultado = document.querySelector("h2.resultado");

botao.addEventListener("click", (evento) => { fuiClicado() })

