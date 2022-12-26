// Escopo

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