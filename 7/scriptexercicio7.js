let primeiroNumero = document.getElementById("primeiroNumero");
let segundoNumero = document.getElementById("segundoNumero");
let btMaiorMenor = document.getElementById("btMaiorMenor");

function statusNumeros(){
    let v1 = Number(primeiroNumero.value);
    let v2 = Number(segundoNumero.value);

    if (v1 > v2){
        alert("O primeiro numero eh maior")
    }else if (v1 == v2)
        alert("O numero um eh igual o numero dois")
    else
        alert("O primeiro numero eh menor que o segundo");
}

btMaiorMenor.onclick = function(){
    statusNumeros();
}