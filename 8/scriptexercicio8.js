let insiraNumero = document.getElementById("insiraNumero");
let btNumero = document.getElementById("btNumero");

function parImpar(){
    let valorUm = Number(insiraNumero.value);

    if (valorUm % 2 == 0){
        alert("O numero eh par");

    }else
        alert("O numero eh impar");
}

btNumero.onclick = function(){
    parImpar();
}