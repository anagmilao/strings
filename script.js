const botaoExibeTexto = document.querySelector('#botao-palavrachave');

botaoExibeTexto.addEventListener('click', mostraTermosPrincipais);

function mostraTermosPrincipais (){
 const texto = document.querySelector('#entrada-de-texto').value;
 const campoResultado = document.querySelector('#resultado-palavrachave')
 const palavrasChave = extraiTexto(texto);

 campoResultado.textContent = palavrasChave.join(", ");
}

function extraiTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}
