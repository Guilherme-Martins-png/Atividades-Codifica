//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos

//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:

//Isósceles, escaleno ou eqüilátero.

//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require ('prompt-sync')()

let A = parseFloat(prompt("Digite o valor para o lado A do Triângulo"))
let B = parseFloat(prompt("Digite o valor para o lado B do Triângulo"))
let C = parseFloat(prompt("Digite o valor para o lado C do Triângulo"))

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C)  {
        console.log ("eqüilátero: possui todos os lados iguais")
    } else if ( A === B || A === C || B === C ) {
        console.log ("Triângulo isósceles: possui dois lados iguais")
    } else {
        console.log ("Triângulo escaleno: possui todos os lados diferentes")
    }

} else {
    console.log("Triângulo inválido")
}