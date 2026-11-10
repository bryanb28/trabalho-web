//FUNÇÂO PRA TROCA DE PAGINA COM animação de CARREGAMENTO
function trocarPagina(destino){
    const loading = document.getElementById("loading");
    if(loading){
        loading.style.display = "flex"
    }

    setTimeout(function(){
        window.location.href = destino;
    }, 1000)
}


//evento preencher formulario(pagina pra preencher o formulario)

const formulario = document.getElementById("formDieta");
if(formulario){
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        if(!formulario.checkValidity()){
            return
        }
        //pegar o peso 
        let peso = document.getElementById("peso").value;
        peso = parseFloat(peso)

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("element").value;


        //pegar a altura
        let altura = document.getElementById("altura").value;
        altura = parseFloat(altura)


        //pegar idade
        let idade = document.getElementById("idade").value;
        idade = parseFloat(idade);


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

        function definirGenero(genero){
            if(genero === "masculino"){
                return 5;
            }else if(genero === "feminino"){
                return -161
            }
        }
        genero = definirGenero(genero);


        
        function calculoCalorias(peso, altura,idade, genero, atividade, objetivo ){
            let tmb = (10 * peso) + (6.25 * altura)-(5 * idade) + genero;


            let calorias = (tmb * atividade) + objetivo;
            return calorias
    };

    let valorCalorias = calculoCalorias(peso, altura, idade, genero, atividade, objetivo);

    const parametros = new URLSearchParams();
    parametros.append("peso", peso);
    parametros.append("altura", altura);
    parametros.append("idade", idade);
    parametros.append("genero", genero);
    parametros.append("atividade", atividade);
    parametros.append("objetivo", objetivo);
    parametros.append("resultado", valorCalorias);
    parametros.append("nome", nome);
    paramentros.append("email", email);

    
        
    trocarPagina("formAction.html?" + parametros.toString());

    });
};


//pagina de resposta
const resultado = document.getElementById("resultado");
if (resultado) {
    const parametros = new URLSearchParams(window.location.search);

    const valorCalorias = parametros.get("resultado");
    const peso = parametros.get("peso");
    const altura = parametros.get("altura");
    const idade = parametros.get("idade");
    const genero = parametros.get("genero");
    const atividade = parametros.get("atividade");
    const objetivo = parametros.get("objetivo");
    const nome = parametros.get("nome");
    const email = parametros.get("email");

    resultado.textContent = Math.floor(valorCalorias) + " kcal por dia";

    document.getElementById("dadosrecebidos").textContent = `Peso: ${peso} kg | Altura: ${altura} cm | Idade: ${idade} anos`;
    
    

    peso = ''
    altura = ''
    idade = ''
    genero = ''
};

//usar a função de trocar de pagina com animação de carregamento

const botaoNovamente = document.getElementById("calcularNovamente");
if(botaoNovamente){
    botaoNovamente.addEventListener("click", function(event){
        event.preventDefault();
        trocarPagina("form.html")//reaproveita a função criada anteiormente
    });
}


