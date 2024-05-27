let numeroAlunos = document.getElementById("numeroAlunos");
let quantiaSalas = document.getElementById("quantiaSalas");
let btResultado = document.getElementById("btResultado");
let resultadoUm = document.getElementById("resultadoUm");
let resultadoDois = document.getElementById("resultadoDois");

function alunosSalas(){
    let nAlunos = Number(numeroAlunos.value);
    let nSalas = Number(quantiaSalas.value);
    let resultado = (nAlunos / nSalas);
    resultadoUm.textContent = ("O numero de alunos por sala eh de " + resultado);

    let semTurma = (nAlunos % nSalas);
    resultadoDois.textContent = ("O numero de alunos sem turma eh de " + semTurma);
}

btResultado.onclick = function(){
    alunosSalas();
}