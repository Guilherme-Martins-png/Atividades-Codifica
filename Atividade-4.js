//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require ('prompt-sync')()
console.log("Olá! Gostaria de marcar sua consulta para qual dia? Temos esses dias disponiveis")
console.log("Quarta-feira")
console.log("Sexta-feira")
console.log("Domingo")

let opcao = prompt ("Selecione uma opção:  ")

switch(opcao) {
    case "Quarta-feira" :
        console.log ("Consulta marcada com sucesso! Nos vemos na próxima Quarta-feira!")
        break
        case "Sexta" :
            console.log ("Consulta marcada com sucesso! Nos vemos no próxima Sexta-feira!")
        break
            case "Domingo" :
        console.log ("Consulta marcada com sucesso! Nos vemos no próximo Domingo")
        break
        default :
        console.log("Infelizmente não temos esse dia disponivel :( ")
}
