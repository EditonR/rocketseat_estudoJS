// Template lirerals (template strings, interpolação de strings)

let userName = "Eddie"
let email = "eddie@email.com"


// Pode passar mais de um parâmeto no console.log
console.log(userName, email)

// Concatenar texto.
let message = "Olá, "  +userName + ". Você conectou o e-mail " + email // Forma trabalhosa

console.log(message)

//Template Literals
console.log(`Olá, ${userName}. Você conectou com o e-mail ${email}.`) // Forma simples

/*

abordamos o conceito de Template Literals, um recurso para manipular Strings de forma mais eficiente. Demonstramos como criar mensagens formatadas combinando variáveis, destacando a diferença entre concatenar texto e usar Template Literals para facilitar a leitura e organização do código. Com Template Literals, é possível inserir variáveis diretamente em uma string de forma mais simples e dinâmica, tornando a construção de frases mais eficiente e legível.

*/