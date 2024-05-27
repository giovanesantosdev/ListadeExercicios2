let refriQuantia = document.getElementById("refriQuantia");
let btresultado = document.getElementById("btresultado");
let h3sabor = document.getElementById("h3sabor");
let h3preco = document.getElementById("h3preco");

function saboresEscolhidos(){
    let primeiroSabor = document.getElementById("primeiroSabor").value;
    let segundoSabor = document.getElementById("segundoSabor").value;
    let terceiroSabor = document.getElementById("terceiroSabor").value;
    let quartoSabor = document.getElementById("quartoSabor").value;

    let saboresP = primeiroSabor + ", " + segundoSabor + ", " + terceiroSabor + ", " + quartoSabor;
    h3sabor.textContent = "Os sabores escolhidos foram os seguintes: " + saboresP;
}

function valorFinal(){
    let valorPizza = 12;
    let valorBebida = 7 * (refriQuantia.value);
    let resultadoCompra = (valorPizza * 4) + valorBebida;
    h3preco.textContent = "O total em reais é de : " + resultadoCompra;
}



btresultado.onclick = function(){
    saboresEscolhidos();
    valorFinal();
}