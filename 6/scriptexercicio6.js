let notaBimestre = document.getElementById("notaBimestre");
let btNota = document.getElementById("btNota");

function mediaBim(){
    let valorUm = Number(notaBimestre.value);

    if(valorUm >= 6){
        alert("Aprovado!")
    }

    else if(valorUm >=4 && valorUm <6){
        alert("Faca a prova substitutiva");

    }else
        alert("Reprovado!");

}   

btNota.onclick = function(){
    mediaBim();
}