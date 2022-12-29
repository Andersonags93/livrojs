// Programa Soma 2 números 

const prompt = require("prompt-sync")()     // Adiciona pacote para a entrada de dados
const num1 = Number(prompt("1° Número: "))  // Lê os números
const num2 = Number(prompt("2º Número: "))
const soma = num1 + num2                    // Calcula a soma
console.log(`Soma é: ${soma}`)              // Exibe o resultado