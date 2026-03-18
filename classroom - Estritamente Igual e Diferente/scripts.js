/*
Nesta aula, expliquei sobre os operadores de comparação estritamente igual a (===) e estritamente diferente de (!==) em JavaScript. O operador estritamente igual a compara tanto o valor quanto o tipo das variáveis, enquanto o estritamente diferente de faz o mesmo, mas retorna verdadeiro se os tipos forem diferentes. Recomendei o uso desses operadores para garantir comparações precisas, especialmente ao lidar com diferentes tipos de dados, evitando erros comuns, como concatenar em vez de somar valores.

*/

let one = 1
let two = 2
// === estritamente igual a (tipo e valor)

console.log("### ESTRITAMENTE IGUAL ###")
console.log( one === 1);
console.log( one === "1");

// !== estritamente diferente a (tipo e valor)

console.log("### ESTRITAMENTE DIFERENTE DE ###")
console.log( one !== two);
console.log( one !== 1);
console.log( two !== 2);
console.log( two !== "2");