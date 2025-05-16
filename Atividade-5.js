//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const prompt = require ('prompt-sync')()
console.log ("Bem-vindo(a) á calculdara de IMC")
let peso = parseFloat (prompt("Digite seu peso: "));
let altura = parseFloat (prompt("Digite sua altura: "));

let IMC = peso / ( altura * altura )

if ( IMC <= 18.5) {
    
    console.log("Seu IMC é: " + IMC.toFixed(2));
    console.log ("Você está abaixo de peso")
} else if (IMC >= 18.5 && IMC <= 24.9) {
    
    console.log("Seu IMC é: " + IMC.toFixed(2));
    console.log("Não se preocupe, seu peso está normal :)")
} else if ( IMC >= 25 && IMC <= 29.9 ) {
    
    console.log("Seu IMC é: " + IMC.toFixed(2));
    console.log ("Você está em sobrepeso")
} else if (IMC >= 30 ) {
   
    console.log("Seu IMC é: " + IMC.toFixed(2));
    console.log ("Você está obeso")
} else {
    console.log ("Não foi possivel calcular")
}




