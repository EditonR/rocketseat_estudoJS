// Grouping Operator (Ordem de precedência)

let total1 = 2 + 3 * 4
console.log(`O valor desta operação é: ${total1}`)

let total2 = (2+3) * 4
console.log(`O valor desta operação é: ${total2}`)


/*
let average = 9.5 + 7+5 / 3 - No caso aqui ele está seguindo a ordem de precedência, então se calculamos desta forma irá dar o valor de: 18,166...

Porque ele vai seguir a ordem de divisão e depois soma.

*/

let average = (9.5 + 7+5) / 3
console.log(`A média do aluno é: ${average}`)
