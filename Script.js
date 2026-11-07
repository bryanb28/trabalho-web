//efeitos


//evento preencher formulario

const formulario = document.getElementById("formDieta");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(!formulario.checkValidity()){
        return
    }
    //pegar o peso 
    let peso = document.getElementById("peso").value;
    peso = parseFloat(peso)
    sessionStorage.setItem("peso", peso);

    //pegar a altura
    let altura = document.getElementById("altura").value;
    altura = parseFloat(altura)
    sessionStorage.setItem("altura", altura);

    //pegar idade
    let idade = document.getElementById("idade").value;
    idade = parseFloat(idade);
    sessionStorage.setItem("idade", idade);

    //pegar genero
    let genero = document.querySelector('input[name="sexo"]:checked').value;

    // nivel de atividade fisica

    const sedentario = 1.2;
    const leve = 1.375;
    const moderado = 1.55;
    const intenso = 1.725;

    let nivelAtividade = document.getElementById("atividade").value;

    function fatorAtividade(nivelAtividade) {
           const sedentario = 1.2;
        const leve = 1.375;
        const moderado = 1.55;
        const intenso = 1.725;
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
    let atividade = fatorAtividade(nivelAtividade);
    sessionStorage.setItem("atividade", atividade);

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
    let objetivo = definirObjetivo();
    sessionStorage.setItem("objetivo", objetivo);

    function definirGenero(genero){
        if(genero === "masculino"){
            return 5;
        }else if(genero === "feminino"){
            return -161
        }
    }
    genero = definirGenero(genero);
    sessionStorage.setItem("genero", genero);

    
    function calculoCalorias(peso, altura,idade, genero, atividade, objetivo ){
        let tmb = (10 * peso) + (6.25 * altura)-(5 * idade) + genero;


        let calorias = (tmb * atividade) + objetivo;
        return calorias
}
let valorCalorias = calculoCalorias(peso, altura, idade, genero, atividade, objetivo);
sessionStorage.setItem("resultado", valorCalorias);

    window.location.href = "formAction.html";
});

const resultado = document.getElementById("resultado");



