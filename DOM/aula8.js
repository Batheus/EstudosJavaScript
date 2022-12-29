// Aula 8 - Traversing e Manipulação

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const faqDL = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const proximoDD = faqDL.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;