/*
Explorando os operadores lógicos "igual a" e "diferente de" em JavaScript. A diferença entre comparar conteúdo e tipo é destacada. O operador "igual a" verifica apenas o conteúdo, enquanto o operador "diferente de" compara o conteúdo. Exemplos práticos são fornecidos para ilustrar como esses operadores funcionam. É importante entender essa distinção ao realizar comparações em JavaScript.

*/

let one = 1
let two = 2

// == igual a

console.log("### IGUAL A ####");
console.log( one == two);
console.log( one == 1);
console.log(one == "1"); // Neste caso ele vai olhar para o conteúdo e não o tipo.


// != diferente de
console.log("### DIFERENTE DE ### ");
console.log(one !=two);
console.log(one !=1);
console.log(one !="1");// Neste caso ele vai olhar para o conteúdo e não o tipo.