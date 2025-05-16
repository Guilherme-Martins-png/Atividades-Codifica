// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let numbA = 0
let numbB = 1
console.log(numbA)
console.log(numbB)

for (i = 2; i < 10; i++) {
    let temp = numbA + numbB 
    console.log (temp)
    numbA = numbB
    numbB = temp

}