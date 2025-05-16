let numbA = 0
let numbB = 1

for (i = 2; i < 10; i++) {
    let temp = numbA + numbB 
    console.log (temp)
    numbA = numbB
    numbB = temp

}