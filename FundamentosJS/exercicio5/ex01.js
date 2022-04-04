console.log('Progrma para guardar o primeiro nome e o sobrenome...');

const prompt = require('prompt-sync') ();

var primeiroNome;
var sobreNome;
var nomeCompleto;

let primeiroNome = prompt('Digite seu nome: ');
let sobreNome = prompt('Digite seu sobrenome: ');

let nomeCompleto = primeiroNome + '' + sobreNome;

console.log(nomeCompleto);
// console.log(`Seu nome completo: ${primeiroNome} ${sobreNome}`)



