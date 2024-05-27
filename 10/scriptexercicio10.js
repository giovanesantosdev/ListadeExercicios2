let valorVendas = document.getElementById("valorVendas");
let metaMinima = document.getElementById("metaMinima");
let metaFinal = document.getElementById("metaFinal");
let btResultado = document.getElementById("btResultado");
let h3minima = document.getElementById("h3minima");
let h3final = document.getElementById("h3final");
let h3resultado = document.getElementById("h3resultado")

function metaAtingida(){
    if (parseFloat(valorVendas) >= parseFloat(metaMinima)){
        alert("A meta minima foi atingida");
    }else
        alert("A meta minima não foi atingida");
}

function metaMaxima(){
    if (parseFloat(valorVendas) >= parseFloat(metaFinal)){
        alert("A meta foi atingida")
    }else
        alert("A meta não foi atingida");
}

function porcentagens(){
    let porcentoMinima = (parseFloat(valorVendas / metaMinima)) * 100;
    let porcentoMeta = (parseFloat(valorVendas / metaFinal)) * 100;
    let resultado1 = "A porcentagem de atingimento da meta mínima é de: " + porcentoMinima;
    let resultado2 = "A porcentagem de atingimento da meta é de: " + porcentoMeta;
    h3resultado.textContent = resultado1 + ", " + resultado2;
}

btResultado.onclick = function(){
    valorVendas = document.getElementById("#valorVendas").value;
    metaMinima = document.getElementById("#metaMinima").value;
    metaFinal = document.getElementById("#metaFinal").value;
    metaAtingida();
    metaMaxima();
    porcentagens();
}