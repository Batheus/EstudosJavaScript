// Aula 3 - Seleção de Elementos

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(`As imagens utilizadas são: ${imagens}`);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemPalavra = document.querySelectorAll('img[src^="img/imagem"]');
console.log(`As imagens com essa palavra são: ${imagemPalavra}`);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(`Os links internos são: ${linkInterno}`);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');
console.log(animais);
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
ultimoParagrafo = paragrafos[--paragrafos.length];
console.log(paragrafos);
console.log(ultimoParagrafo);