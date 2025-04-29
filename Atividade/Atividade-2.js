// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const prompt = require ('prompt-sync')()
let idade = prompt ("Qual a sua idade?")

if (idade <= 12) {
    console.log("Você tem a idade de uma criança")
} else if (idade >= 13 && idade < 18) {
    console.log("Você tem a idade de um adolescente") 
} else if (idade >= 18 && idade < 65) {
    console.log("Você tem a idade de um adulto") 
} else {
    console.log("Você tem a idade de um idoso") 
}
 