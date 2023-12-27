// Acrescentar no site da Loja de Esportes um contador de visitas
// do cliente ao site. Assim, na primeira visita do cliente à loja, exibir
// em um parágrafo do site a mensagem:

// Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.

// Nas próximas visitas, exibir:

// Que bom que você voltou! Esta é a sua visita de número x ao nosso site.

function trocarClube(){
    //Referêmcias aos elementos da página.
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");
    var rbNenhum = document.getElementById("rbNenhum");
    var mensagem = document.getElementById("mensagemVisitas");

    //Variável que irá receber o valor das rabios.
    var clube;

    //Condicional, se o radio "rbBrasil" foi selecionado.
    if (rbBrasil.checked) {
        //Se sim, retorna esse valor a variável "clube".
        clube = "Brasil";
    } else if (rbPelotas.checked) {
        //Se não, retorna esse valor.
        clube = "Pelotas";
    } else if (rbFarroupilha.checked) {
        //Se não, retorna esse valor.
        clube = "Farroupilha";
    } else if (rbNenhum.checked) {
        //Se não for nenhum desses valores, retorna esse valor.
        clube = "Nenhum";
    }

    //Condiconal, se clube for igual a "Nenhum".
    if (clube === "Nenhum") {
        // Oculta a imagem, remove as cores do título e limpa 
        //a mensagem.
        imgClube.className = "oculta";
        divTitulo.className = "row";
        mensagem.innerHTML = '';
    } else {
        //Se não, mostra a imagem, aplica as cores do clube ao título e 
        //atualiza a mensagem.
        divTitulo.className = "row cores" + clube;
        imgClube.src = "img/" + clube.toLowerCase() + ".png";
        imgClube.className = "exibe";
        imgClube.alt = "Símbolo do " + clube;

        //Atualiza o contador de visitas para o clube específico, 
        //A variável "contadorClube" recebe o valor de, passando 
        //para inteiro o valor retornado da dupla de chave de string 
        //'contadorVisitas' + clube, na base numeriaca de 10, se o valor 
        //não for uma string numerica ou não tiver valor, retorna 0.
        var contadorClube = parseInt(localStorage.getItem('contadorVisitas' + clube), 
        10) || 0;
        //Incrementa +1 no valor retornado.
        contadorClube++;
        //Adiciona o novo valor no localStorage.
        localStorage.setItem('contadorVisitas' + clube, contadorClube);

        //Condicional, se for a primeira visita.
        if (contadorClube === 1){
            //Retorna essa mensagem.
            mensagem.innerHTML = 
            "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site."
        } else {
            //Se não, retorna essa mensagem.
            mensagem.innerHTML = 'Que bom que você voltou! Esta é a sua visita de número ' 
            + contadorClube + ' ao nosso site.';
        }
    }
}

//Referêmcias aos elementos radio da página.
var rbBrasil = document.getElementById("rbBrasil");
var rbPelotas = document.getElementById("rbPelotas");
var rbFarroupilha = document.getElementById("rbFarroupilha");
var rbNenhum = document.getElementById("rbNenhum");

//Coloca um ouvinte que é acionado toda vez que se muda a seleção 
//de um rabio e chama a função "trocarClube".
rbBrasil.addEventListener("change", trocarClube);
rbPelotas.addEventListener("change", trocarClube);
rbFarroupilha.addEventListener("change", trocarClube);
rbNenhum.addEventListener("change", trocarClube);

//Obtem todos os elementos inputs da página.
var inputsRadio = document.getElementsByTagName("input");

//Laço que percorre todo os inputs.
for (var i = 0; i < inputsRadio.length; i++){
    //Para todos os inputs, aciona um evento toda vez que um 
    //input muda.
    inputsRadio[i].addEventListener("change", trocarClube);
}

function verificarClube() {
    //Recupera o valor da chave 'clube' do localStorage.
    var clubeSelecionado = localStorage.getItem("clube");

    //Verifica se o clube foi previamente selecionado.
    if (clubeSelecionado) {
        //Itera sobre todos os elementos do tipo 'input' 
        //(botões de rádio).
        for (var i = 0; i < inputsRadio.length; i++) {
            //Verifica se o valor do botão de rádio corresponde 
            //ao clube selecionado.
            if (inputsRadio[i].value === clubeSelecionado) {
                // Marca o botão de rádio correspondente como 
                //selecionado.
                inputsRadio[i].checked = true;
                break; //Sai do loop após marcar o botão de 
                //rádio correto.
            }
        }
        //Chama a função 'trocarClube', que atualiza a página 
        //com informações do clube selecionado.
        trocarClube();
    }
}

//Chama a função 'verificarClube'.
verificarClube();
