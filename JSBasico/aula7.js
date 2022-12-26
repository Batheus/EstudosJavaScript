// Tudo é Objeto

// nomeie 3 propriedades ou métodos de strings
let nome = 'Matheus';
nome.charAt(2);
nome.length;
nome.toUpperCase();

// nomeie 5 propriedades ou métodos de elementos do DOM
/*
let btn = document.querySelector('.btn');
btn.classList.add('corLetra');
btn.innerText;
btn.addEventListener('click', function(){
    console.log("Você clicou!")
})
btn.classList.remove('corLetra');
btn.innerHTML.toUpperCase();

busque na web um objeto (método) capaz de interagir com o clipboard, 
clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
*/

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let copasBrasil = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var x = 0; x < copasBrasil.length; x++){
    console.log(`O Brasil ganhou a copa em: ${copasBrasil[x]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas.slice(-1)[0];
console.log(ultimaFruta);