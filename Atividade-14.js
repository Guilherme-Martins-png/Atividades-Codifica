// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require ("prompt-sync") ()
let n = parseInt (prompt("Digite um número:  "))
let resultado = 1

for (let i = 1; i <= n; i++) {
    resultado *= i;

}

console.log( `${n}! = ${resultado}`)