// a) Elaborar um programa para uma empresa que leia o salario e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e einforme o número de quadriênios a que o funcionário tem direito e o salário final

const prompt = require("prompt-sync")()         // adiciona o pacote ao programa
const salario = Number(prompt("Salário R$: "))  // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "))

const quadrienios = Math.floor(tempo / 4)       // calcula quadriênios
const acrescimo = salario * quadrienios / 100   // calcula o acrescimo

console.log(`\nQuadriênios: ${quadrienios}`)    // Os consoles exibem as respostas
console.log(`Salário final R$: ${(salario+acrescimo).toFixed(2)}`)
