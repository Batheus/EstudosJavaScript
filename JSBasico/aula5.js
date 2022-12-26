// Funções

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