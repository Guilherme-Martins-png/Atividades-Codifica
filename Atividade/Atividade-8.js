//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const prompt = require ('prompt-sync')()
let valor1 = parseFloat (prompt("Digite o primeiro valor:  "))
let valor2 = parseFloat (prompt("Digite o segundo valor:  "))


//Validação
if (isNaN(valor1) || isNaN(valor2)) {
    console.log("ERRO: apenas números são válidos!")
    return
} 

if (valor1 === valor2 ) {
    console.log ("ERRO: Valores iguais não podem ser lidos")
} else if (valor1 < valor2) {
    console.log ("Valores em ordem crescente:")
    console.log (valor1)
    console.log (valor2)
} else {
    console.log ("Valores em ordem crescente:")
    console.log(valor2)
    console.log (valor1)
}