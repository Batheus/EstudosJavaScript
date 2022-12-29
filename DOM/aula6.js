// Aula 6 - Dimensões e Distâncias

// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector('img');
const imagemTop = imagem.offsetTop;
console.log(imagemTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    const imagens = document.querySelectorAll('img');
    imagens.forEach((img) => {
        console.log(img.offsetWidth)
    });
}
window.onload = function(){
    somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
imagens.forEach((link) => {
    if(link.offsetWidth > 48 && link.offsetHeight > 48){
        console.log("Recomendado")
    }
    else{
        console.log("Não recomendado")
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserPequeno = window.matchMedia('(max-width: 720px').matches;

if(browserPequeno) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}