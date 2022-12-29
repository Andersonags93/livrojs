// b) Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).

const prompt = require("prompt-sync")()                     
const pesoKg = Number(prompt("Peso da ração (kg): "))
const consumoDiario = Number(prompt("Consumo diário (gr): "))

const pesoGr = pesoKg * 1000
const duracao = Math.floor(pesoGr / consumoDiario)
const sobra = pesoGr % consumoDiario

console.log(`\nDuração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)