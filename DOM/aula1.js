// Aula 1 - O que é DOM

// alert('Teste de alerta.');

// Retorne o url da página atual utilizando o objeto window
console.log(`A URL atual é: ${window.location.href}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const linguagem = navigator.language;
console.log(`A linguagem utilizada é: ${linguagem}`);

// Retorne a largura da janela 
const larguraJanela = innerWidth;
console.log(`A largura da janela é: ${larguraJanela}`);
