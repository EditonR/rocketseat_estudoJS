/*
Na programação, assim como na matemática, a ordem de precedência é fundamental para definir a sequência de operações a serem realizadas em uma expressão. A ordem de precedência determina qual operação será executada primeiro em expressões com múltiplos operadores. É importante conhecer a ordem de precedência para evitar erros de cálculo. Parênteses podem ser utilizados para alterar a ordem de execução das operações. Compreender a ordem de precedência é essencial para desenvolver aplicações precisas e evitar equívocos nos cálculos.

*/

console.log("O VALOR DA SOMA É: ", 2 + 3 * 4); // Primeiro ele pega a múltiplicação por causa da ordem de precedência e depois soma o resultado.

console.log("O VALOR DA SOMA É: ", (2+3)* 4);


/*



Ordem de precedência dos operadores( da esquerda para a direita)

Com os parenteses () - Quando tivemos é porque define a conta a ser feita primeira.
-------------------------- TABELA DE ORDEM DE PRECEDÊNCIA----------------------
 NÍVEL               CATEGORIA                  OPERADORES
 7(ALTO)            EXPONENCIAÇÃO                 **
 6                  MULTIPLICAÇÃO                 *, /, //, %
 5                  ADIÇÃO                        +, -
 4                  RELACIONAL                    ==, !=, <=, >=, > , <
 3                  LÓGICO                        not
 2                  LÓGICO                        and
 1(BAIXO)           LÓGICO                        or




*/