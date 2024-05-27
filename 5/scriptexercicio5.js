let anoAtual = document.getElementById("anoAtual");
let nascimento1 = document.getElementById("nascimento1");
let nome1 = document.getElementById("nome1");
let nascimento2 = document.getElementById("nascimento2");
let nome2 = document.getElementById("nome2");
let nascimento3 = document.getElementById("nascimento3");
let nome3 = document.getElementById("nome3");
let btResultado = document.getElementById("btResultado");
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");
let resultado3 = document.getElementById("resultado3");

function resultadoIdades(){
    let ano = parseInt(anoAtual.value);
    let v1 = parseInt(nascimento1.value);
    let v2 = parseInt(nascimento2.value);
    let v3 = parseInt(nascimento3.value);
    let resultadoIdade = ano - v1;
    let resultadoIdade2 = ano - v2;
    let resultadoIdade3 = ano - v3;

    if (resultadoIdade > resultadoIdade2 && resultadoIdade > resultadoIdade3){
        resultado1.textContent = "Pessoa mais velha: " + nome1.value + " " + resultadoIdade + " anos";
    } else if (resultadoIdade2 > resultadoIdade && resultadoIdade2 > resultadoIdade3){
        resultado1.textContent = "Pessoa mais velha: " + nome2.value + " " + resultadoIdade2 + " anos";
    } else {
        resultado1.textContent = "Pessoa mais velha: " + nome3.value + " " + resultadoIdade3 + " anos";
    }
    if (resultadoIdade > resultadoIdade2 && resultadoIdade > resultadoIdade3){
        if (resultadoIdade2 > resultadoIdade3){
         resultado2.textContent = "Segunda pessoa mais velha: " + nome2.value + " " + resultadoIdade2 + " anos";
         resultado3.textContent = "Terceira pessoa mais velha: " + nome3.value + " " + resultadoIdade3 + " anos";
    } else {
         resultado2.textContent = "Segunda pessoa mais velha: " + nome3.value + " " + resultadoIdade3 + " anos";
         resultado3.textContent = "Terceira pessoa mais velha: " + nome2.value + " " + resultadoIdade2 + " anos";
    }
} else if (resultadoIdade2 > resultadoIdade && resultadoIdade2 > resultadoIdade3){
        if (resultadoIdade > resultadoIdade3){
         resultado2.textContent = "Segunda pessoa mais velha: " + nome1.value + " " + resultadoIdade + " anos";
        resultado3.textContent = "Terceira pessoa mais velha: " + nome3.value + " " + resultadoIdade3 + " anos";
} else {
        resultado2.textContent = "Segunda pessoa mais velha: " + nome3.value + " " + resultadoIdade3 + " anos";
         resultado3.textContent = "Terceira pessoa mais velha: " + nome1.value + " " + resultadoIdade + " anos";
    }
} else {
        if (resultadoIdade > resultadoIdade2){
         resultado2.textContent = "Segunda pessoa mais velha: " + nome1.value + " " + resultadoIdade + " anos";
         resultado3.textContent = "Terceira pessoa mais velha: " + nome2.value + " " + resultadoIdade2 + " anos";
    } else {
        resultado2.textContent = "Segunda pessoa mais velha: " + nome2.value + " " + resultadoIdade2 + " anos";
         resultado3.textContent = "Terceira pessoa mais velha: " + nome1.value + " " + resultadoIdade + " anos";
    }
}
}  

btResultado.onclick = function(){
    resultadoIdades()
}


