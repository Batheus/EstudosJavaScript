// AULA 1 - Variáveis

/*
// Declarar uma variável com o seu nome
let meuNome = "Matheus";
// Declarar uma variável com a sua idade
let idade = 21;
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
let comidaFavorita;
// Atribuir valor a sua comida favorita
comidaFavorita = "Lasanha";
// Declarar 5 variáveis diferentes sem valores
let variavel1;
let variavel2;
let variavel3;
let variavel4;
let variavel5;
*/

// ---------------------------------------------------------------------------------------------------

// AULA 2 - Tipos de dados
/*
// Declare uma variável contendo uma string
let frase = "Lionel Messi";
// Declare uma variável contendo um número dentro de uma string
let numstr = "1000 gols";
// Declare uma variável com a sua idade
let idade = 21;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
let primeiroNome = "Matheus";
let sobrenome = "Henrique";
let nomeCompleto = `Meu nome completo é: ${primeiroNome} ${sobrenome}`
// Coloque a seguinte frase em uma variável: It's time
let fraseExercicio = 'It\'s time'
// Verifique o tipo da variável que contém o seu nome
console.log(typeof primeiroNome);
*/

// ---------------------------------------------------------------------------------------------------

// AULA 3 - Números e Operadores
/*
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// Crie duas expressões que retornem NaN
let nan1 = "80kg";
let nan2 = "1.80m";
// Somar a string '200' com o número 50 e retornar 250
let sm1 = '200';
let sm2 = 50;
let soma = +sm1 + 50;
// Incremente o número 5 e retorne o seu valor incrementado
let num5 = 5;
num5++;
console.log(num5);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = +numero / 2 + 'kg'; // NaN (Not a Number)
*/

// ---------------------------------------------------------------------------------------------------

// AULA 4 - Boolean e Condicionais
/*
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 21;
let idadeParente = 30;
if (minhaIdade > idadeParente){
    console.log("Minha idade é maior");
}
else if (minhaIdade == idadeParente){
    console.log("Minha idade é igual");
}
else{
    console.log("Minha idade é menor");
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log("Retorna o valor 3, pois é o último valor TRUE. Pra validar: " + expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
console.log(!!nome);
var idade = 28;
console.log(!!idade);
var possuiDoutorado = false;
console.log(!!possuiDoutorado);
var empregoFuturo;
console.log(!!empregoFuturo);
var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china){
    console.log("Brasil é maior");
}
else if (brasil == china){
    console.log("Brasil é igual");
}
else{
    console.log("Brasil é menor");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
console.log("Aparece falso.");

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
console.log("Aparece Cão, que é o último valor verdadeiro.")
*/

// ---------------------------------------------------------------------------------------------------

// Aula 5 - Funções
/*
// Crie uma função para verificar se um valor é Truthy
function isTruthy(valorTruthy) {
    if(!!valorTruthy == true){
        console.log("É truthy");
    }
    else{
        console.log("É falsy")
    }
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculoQuadrado(valorQuadrado) {
    let somaQuadrado = valorQuadrado * 4;
    return somaQuadrado;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    let nomeSobrenome = `${nome} ${sobrenome}`
    return nomeSobrenome;
}
// Crie uma função que verifica se um número é par
function verificaPar(num) {
    if(num % 2 === 0){
        return "É par";
    }
    else{
        return "É impar";
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(valorType) {
    return typeof valorType;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function(){
    console.log("Matheus Henrique");
});
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
*/

// ---------------------------------------------------------------------------------------------------

// AULA 6 - Objetos
/*
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let meusDados = {
    nome: 'Matheus',
    sobrenome: 'Henrique',
    idade: 26,
    profissao: 'Analista de redes',
}
// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function(){
    console.log(`Meu nome completo é: ${this.nome} ${this.sobrenome}`);
}
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
carro.preco = 3000;
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
let cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    lateAoVerHomem(homem){
        if(homem == true){
            console.log("LATIR");
        }
        else{
            console.log("Ficar de boa");
        }
    },
}
*/

// ---------------------------------------------------------------------------------------------------

// AULA 7 - Tudo é objeto
/*
// nomeie 3 propriedades ou métodos de strings
let nome = 'Matheus';
nome.charAt(2);
nome.length;
nome.toUpperCase();

// nomeie 5 propriedades ou métodos de elementos do DOM
let btn = document.querySelector('.btn');
btn.classList.add('corLetra');
btn.innerText;
btn.addEventListener('click', function(){
    console.log("Você clicou!")
})
btn.classList.remove('corLetra');
btn.innerHTML.toUpperCase();

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
*/

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

// ---------------------------------------------------------------------------------------------------

// AULA 8 - Arrays e Loops
/*
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let copaBrasil = ['1959', '1962', '1970', '1994', '2002'];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copaBrasil.length; i++) {
    console.log(`O brasil ganhou a copa em: ${copaBrasil[i]}`);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var f = 0; f < frutas.length; f++) {
    console.log(frutas[f]);
    if(frutas[f] === 'Pera') {
        break;
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas.slice(-1);
console.log(`A última fruta da array é: ${ultimaFruta}`);
*/

// ---------------------------------------------------------------------------------------------------

// AULA 9 - Atribuição e Ternário
/*
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if (possuiCarro === false && possuiCasa === true) darCredito = true;
else darCredito = false;
console.log(darCredito);
*/

// ---------------------------------------------------------------------------------------------------

// AULA 10 - Escopo
/*
// Por qual motivo o código abaixo retorna com erros?
// Retorna com erros pois "var" é uma palavra reservada do sistema. Segundo, let e const não são acessíveis fora de seu escopo.
const marca = 'Fiat';
let portas = 4;
{
    var cor = 'preto';
}
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
// Colocando a váriavel const fora do escopo para ela conseguir ser acessada pelas duas funções
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
// Declarar a váriavel após o laço for
for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
var numero = 50;
const total = 10 * numero;
console.log(total);
*/