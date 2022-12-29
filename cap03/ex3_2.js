// Programa de Revenda de veículos

const prompt = require("prompt-sync")()                 // adiciona o pacote ao programa
const veiculo = prompt("Veículo: ")                     // lê os dados de entrada
const preco = Number(prompt("Preço R$: "))

const entrada = preco * 0.50                            // calcula o valor da entrada
const parcelas = (preco * 0.50) / 12                    // calcula as parcelas
        
console.log(`\nPromoção: ${veiculo}`)                   // os consoles exibem as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcelas.toFixed(2)}`)
