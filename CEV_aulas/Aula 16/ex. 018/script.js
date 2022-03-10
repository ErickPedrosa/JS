var n = [];

function adicionar(){
    var num = Number((document.querySelector("input#num")).value);
    var tab = document.querySelector("select#tab");
    var limpar = document.querySelector("div#res");

    if (num <= 0 || num > 100) {
        alert("ERRO: Digite um número entre 1 e 100.")
    }else{
        
        if(n.indexOf(num) == -1){
            let item = document.createElement('option');
            
            item.text = `Valor ${num} adicionado`;
            item.value = `tabItem${n.length}`;
            tab.appendChild(item);

            n[n.length] = num;
        }else{
            alert("ERRO: O número já existe na tabela.")
        }
    }

    limpar.innerHTML = "";
}

function finalizar(){
    var resultado = document.querySelector("div#res");

    resultado.innerHTML = `<p>Ao todo temos ${n.length} números cadastrados.</p>
    <p>O maior valor informado foi ${maior(n)}.</p>
    <p>O menor valor informado foi ${menor(n)}.</p>
    <p>Somando todos os valores, teremos ${soma(n)}.</p>
    <p>A média dos valores digitados é ${media(n)}.</p>`

}

function maior(n){
    let maior = 0;

    for(let i = 0; i < n.length; i++){
        if (n[i] > maior) {
            maior = n[i];
        }
    }
    return maior;
}
function menor(n){
    let menor = 101;

    for(let i = 0; i < n.length; i++){
        if (n[i] < menor) {
            menor = n[i];
        }
    }
    return menor;
}
function soma(n){
    let res = 0;

    for (let i = 0; i < n.length; i++) {
        res += n[i];
        
    }
    return res;
}
function media(n){
    return (soma(n) / n.length);
}