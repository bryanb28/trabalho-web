const formulario = document.getElementById("formulario");
formulario.addEventListener("subimit", function(event){
    event.preventDefault();
    let peso = document.getElementById("peso").value;
    peso = perseFloat(peso)

    let altura = document.getElementById("altura").value;
    altura = perseFloat(altura)
});
//pegar o peso 
let peso = document.getElementById("peso").value;
peso = perseFloat(peso)



//pegar a altura
var altura = document.getElementById("altura").value;
altura = perseFloat(altura)


// nivel de atividade fisica

const sedentario = 1.2;
const leve = 1.375;
const moderado = 1.55;
const intenso = 1.725;

let nivelAtividade = document.getElementById("atividade").value;

function fatorAtividade(nivelAtividade) {
    if(nivelAtividade === "sedentario"){
        return sedentario
    }else if(nivelAtividade === "leve"){
        return leve
    }else if(nivelAtividade === "moderado"){
        return moderado
    }else if(nivelAtividade === "intenso"){
        return intenso
    }
}
//DEFINIR O NIVEL DE ATIVIDADE FISICA 
function definirObjetivo(){
    let objetivo = document.getElementById("objetivo").value
    if(objetivo === "perder"){
        return -300;
    }else if(objetivo === "manter"){
        return 0
    }else if(objetivo === "ganhar"){
        return 300;
    }
}

function definirGenero(){
    if
}

function calculoCalorias(peso, altura, ){
    let tmb = (10 * peso) + (6.25 * altura)-(5 * idade) + definirGenero();


    let get = (tmb * fatorAtividade()) + definirObjetivo();
}