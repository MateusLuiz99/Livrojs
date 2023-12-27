// Criar dez imagens de números (de 0 a 9) como se fossem velas
// de aniversário e salvá-las na pasta img. Em seguida, elaborar um
// programa que leia uma idade e insira as imagens correspondentes
// na página conforme o número informado. O programa deve permitir
// idades entre 1 e 120 anos.

function exibirVelas(){
    //Referêmcias aos elementos da página.
    var inIdade = document.getElementById("inIdade");
    var h3 = document.getElementsByTagName("h3")[0];
    var idade = inIdade.value;

    //Validação dos dados.
    if(idade == 0 || idade > 120){
        alert("Por favor, digite uma idade válida entre 1 e 120 anos.");
        inIdade.focus();
        return;
    }

    //Variável que recebe os digitos separados passados pelo usuário.
    var dig = idade.split("");
    //Laço que percorre todos os digitos.
    for(var i = 0; i < dig.length; i++){
        //Cria um elementos de img na página HTML.
        var img = document.createElement("img");
        //Adiciona o direcionamento no campo "src" da tag img que é 
        //o local da imagem que será mostrada, o "dig[i]" mostra o 
        //número digitado pelo usuário que é também o nome da imagem 
        //mais o ".png" que é o formato da imagem.
        img.src = "./img/" + dig[i] + ".png";
        //Manipulação de estilo, alinha as imagens e o tamanho dela.
        img.style.display = "inline";
        img.style.width = "70px";
        img.style.height = "auto";
        //img é filha de h3.
        h3.appendChild(img);
    }
}

//Cria referência ao botão e após associa function ao 
//evento click.
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirVelas);

//Referência ao elemento do botão e adiciona um ouvinte 
//de click que aciona uma função anônima que faz um 
//reload que é a atualização da página e limpa os campos 
//da página ao clicar no botão.
var btNovas = document.getElementById("btNovas");
btNovas.addEventListener("click", function(){
    location.reload();
});