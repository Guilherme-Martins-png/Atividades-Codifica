//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require ('prompt-sync')()
let nota = prompt ("Nota do aluno: ")


if ( nota >= 7) {
    console.log ("O aluno está aprovado")
} else if ( nota == 6) {
    console.log ("O aluno está de recuperação")
} else {
    console.log ("Reprovado")
}