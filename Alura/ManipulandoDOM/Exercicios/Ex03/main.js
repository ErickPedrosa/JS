var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

console.log(lista);

var vermelho = lista.indexOf("Vermelho");
lista.splice(vermelho, 1)

console.log(lista);
