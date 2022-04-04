var n1;
var n2;

n1 = parseInt(window.prompt('Digite o Primeiro valor: ', '0'));
n2 = parseInt(window.prompt('Digite o Segundo valor valor: ', '0'));

if (n1 > n2) {
    document.write('O número em ordem crescente é ' +n2 +" e " +n1)
} else {
document.write('Os números digitados já estão em ordem crescente = ', +n1+ " e " +n2)
}