var n1 = 3
let nome = 'henrique'

switch (n1) {
    
    case 1: nome = 'girafa'; // De henrique para girafa
    break;
    case 2: nome += ' Mitológico'; //henrique Mitolígico
    break
    case 3: n1++
    default: console.log('Não vai acontecer nada!')
}
console.log(nome)
console.log(n1)