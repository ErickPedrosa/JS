function verificar(){
    var anotxt = window.document.querySelector("input#anotxt");
    var masc = window.document.querySelector("input#Masc");
    var fem = window.document.querySelector("input#Fem");
    var section = window.document.querySelector("section");
    var img = window.document.querySelector("div#img");

    var ano = Number(anotxt.value);    
    var agr = new Date();
    var ano_atual = agr.getFullYear();
    var idade = ano_atual - ano;

    if(masc.checked && fem.checked || !masc.checked && !fem.checked){
        alert("ERRO: Selecione apenas uma opção!");

    }else if(masc.checked){
        if(idade <= 10 && idade >= 1){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/CriancaHomem.png" alt="Foto criança">`
            img.innerHTML += `<p>Detectamos um homem de ${idade} anos de idade</p>`

        }else if(idade <= 25 && idade > 10){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/Garoto.png" alt="Foto homem">`
            img.innerHTML += `<p>Detectamos um homem de ${idade} anos de idade</p>`

        }else if(idade <= 35 && idade > 25){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/JovemHomem.png" alt="Foto homem">`
            img.innerHTML += `<p>Detectamos um homem de ${idade} anos de idade</p>`
            
        }else if(idade <= 55 && idade > 35){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/Adulto.png" alt="Foto homem">`
            img.innerHTML += `<p>Detectamos um homem de ${idade} anos de idade</p>`
            
        }else if(idade > 55 && idade <= 150){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/Idoso.png" alt="Foto idoso">`
            img.innerHTML += `<p>Detectamos um homem de ${idade} anos de idade</p>`
            
        }else{
            alert("ERRO: O ano selecionado é inválido!");
        }

    }else if(fem.checked){
        if(idade < 10 && idade >= 1){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/CriancaMulher.png" alt="Foto criança">`
            img.innerHTML += `<p>Detectamos uma mulher de ${idade} anos de idade</p>`

        }else if(idade <= 25 && idade > 10){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/Garota.png" alt="Foto mulher">`
            img.innerHTML += `<p>Detectamos uma mulher de ${idade} anos de idade</p>`

        }else if(idade <= 35 && idade > 25){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/JovemMulher.png" alt="Foto mulher">`
            img.innerHTML += `<p>Detectamos uma mulher de ${idade} anos de idade</p>`

        }else if(idade <= 55 && idade > 35){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/Adulta.png" alt="Foto mulher">`
            img.innerHTML += `<p>Detectamos uma mulher de ${idade} anos de idade</p>`

        }else if(idade > 55 && idade <= 150){
            section.style.height = "470px";
            img.innerHTML = `<img src="Imagens/Idosa.png" alt="Foto idosa">`
            img.innerHTML += `<p>Detectamos uma mulher de ${idade} anos de idade</p>`

        }else{
            alert("ERRO: O ano selecionado é inválido!");
        }

    }

}