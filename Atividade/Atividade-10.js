//Escreva um algoritmo para poder ler um número inteiro e escrevê-lo na tela 10 vezes

const prompt = require ('prompt-sync') ()

let numb = parseInt (prompt ("Escreva um número:  "))

for (let i = 0; i < 10; i++) {
    console.log (numb)
}