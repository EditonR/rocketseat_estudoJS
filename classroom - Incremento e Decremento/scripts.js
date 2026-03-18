/*
Nesta aula, expliquei os operadores de incremento e decremento em JavaScript. Demonstrei como usar o operador de incremento (++) e decremento (--) antes e depois de uma variável, mostrando como eles afetam o valor da variável. Também destaquei a diferença entre incrementar e decrementar antes e depois da variável, além de mostrar como adicionar ou subtrair valores maiores do que 1. Os operadores facilitam a manipulação de variáveis de forma mais eficiente.
*/


//INCREMENTO
let number = 10
//number = number + 1

number++ //operador de incremento
//Incrementa após (por isso não mostra no console)
console.log(number++)
console.log(number)


//Incrementa antes
console.log(++number)

//Decremento
//console.log("Decremento após: ", number--)
//console.log(number--)
console.log("Decremento antes: ", --number)

//Incrementar mais de um(colocar)
number += 10
console.log(number)


//Decrementar mais de um(removendo)
number -=2
console.log(number)


//A mesma coisa que fazer:
number = number + 20
console.log(number)

number = number - 20
console.log(number)

