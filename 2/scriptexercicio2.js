let nPessoas = document.getElementById("nPessoas");
let btVerifica = document.getElementById("btVerifica");
let h2resultado = document.getElementById("h2resultado");

function ingredientesPessoas(){
    valorPessoas = Number(nPessoas.value)

    let valorOvos = valorPessoas * 2;
    let valorQueijos = valorPessoas * 50;

    let totalOvos = nPessoas + valorOvos;
    let totalQueijo = nPessoas + valorQueijos;

    h2resultado.textContent = "o total de ovos e queijo em gramas " + (valorOvos + valorQueijos);
}

btVerifica.onclick = function(){
    ingredientesPessoas();
}
