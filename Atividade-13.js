//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.
const prompt = require ('prompt-sync') ()
let soma = 0
let contador = 0
let continuar = true

while(continuar) {
    let numb = parseFloat(prompt("Digite um número:  "))
    if (numb === 0) break;
    soma += numb
    contador++;
}

if (contador > 0) {
    console.log(`Média: ${(soma / contador).toFixed(2)}`)
} else {
    console.log("Nenhum número válido foi digitado.");
}