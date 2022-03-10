function contar() {
    
var inicio = document.querySelector("input#inicio");
var n_in = Number(inicio.value);

var fim = document.querySelector("input#fim");
var n_fim = Number(fim.value);

var passo = document.querySelector("input#incremento");
var n_pas = Number(passo.value);

var section = document.querySelector("div#res")

if(n_pas <= 0){
    alert("ERRO: Impossível calcular, passo inválido, considerando passo = 1");
    n_pas = 1
}

if(n_in == 0 || n_fim == 0 ){
    section.innerHTML = "<p>Impossível calcular.</p>"

}else if (n_fim > n_in && n_pas > 0) {
    for (let i = n_in; i <= n_fim; i += n_pas) {
        if (i == n_in) {
            section.innerHTML = `<p>Contando:</p>${i} &#X1F449 `
            
        }else{
            section.innerHTML += `${i} &#X1F449 `
        }   
    }
    section.innerHTML += ` &#X1F3C1`

}else{
    for (let i = n_in; i >= n_fim; i -= n_pas) {
        if (i == n_in) {
            section.innerHTML = `<p>Contando:</p>${i} &#X1F449 `
            
        }else{
            section.innerHTML += `${i} &#X1F449 `
        }   
    }
    section.innerHTML += ` &#X1F3C1`
}

}