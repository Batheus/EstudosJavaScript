// Aula 4 - forEach e Arrow Function

// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');

paragrafo.forEach(function(x) {
    console.log(x);
})
// Mostre o texto dos parágrafos no console
paragrafo.forEach(x => console.log(x.innerText));

// Como corrigir os erros abaixo:
/* 

const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);

*/
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

