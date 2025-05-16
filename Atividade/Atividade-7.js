//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require ('prompt-sync')()
let valorUnidade = 0.30
let valorAtacado = 0.25

let quantidadeMacas = parseFloat (prompt("Quantas maças você vai pegar?"))

if (quantidadeMacas < 12) {
    let total = quantidadeMacas * valorUnidade
    let t = total.toFixed(2)
    console.log (`Você vai levar ${quantidadeMacas} por ${valorUnidade.toFixed(2)} cada, totalizando ${t}`)
} else if ( quantidadeMacas < 0) {
    console.log("A quantidade não pode ser negativa.")
} else {
    let total = quantidadeMacas * valorAtacado 
    let t = total.toFixed(2)
    console.log (`Você vai levar ${quantidadeMacas} maças por ${valorAtacado.toFixed(2)} cada, totalizando ${t}`)
}
