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