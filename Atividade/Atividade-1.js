//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require ('prompt-sync')()
let continuar = true



while (continuar) {
    let numb = prompt("Escreva um numero")
    
    if (numb % 2) {
    console.log("Impá")
    
} else {
    console.log ("pá")
}

let resposta = prompt("Gostaria de verificar outro numero? caso não queira digite sair")
 if (resposta === "sair") {
    continuar = false
}


}