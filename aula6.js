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