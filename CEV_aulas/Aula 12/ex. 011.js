var idade = 17;

if (idade < 16) {
    console.log(`Você é menor de idade e não pode votar.`);
    
}else if (idade < 18 || idade > 65)  {
   
    console.log(`Seu voto é opicional.`); 
    
}else{
    console.log(`Seu voto é obrigatório.`)
}