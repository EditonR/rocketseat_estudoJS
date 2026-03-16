//console.log(user)
//var user = 'Eddie'

//Hoisting
//var user
// console.log(user)

/*

focamos no escopo da variável VAR, explicando como o hosting de VAR funciona. Mostramos que o VAR tem escopo global, movendo as declarações para o topo antes da execução do código. Demonstramos como é possível usar uma variável antes de declará-la. Também abordamos a diferença entre VAR e LET, destacando que o LET respeita o escopo onde foi criado, enquanto o VAR sobe no escopo. Concluímos que o LET oferece mais controle sobre o escopo e a visibilidade das variáveis.

*/




{
  var age = 18
}

console.log(age)


let address = 'Rua X'
{
  address= 'Rua Y'
  console.log(address)
}