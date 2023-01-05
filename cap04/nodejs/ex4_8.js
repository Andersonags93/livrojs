/*
    b) Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o n° máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condiçõess

        - Cada parcela deve ser de no mínimo, R$ 20,00;
        - O número máximo de parcelas permitido é 6.
*/

const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da Compra R$: "))
const aux = Math.floor(valor / 20)      // aux = n° de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux   // operador ternário
const valorParcela = valor / parcelas   // calcula o valor das parcelas

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)

/* Para calcular o número de parcelas, no exemplo foi utilizado o operador ternário. Ele equivale às seguintes linhas de código:

    let parcelas
    if (aux == 0) {
        parcelas = 1
    } else if (aux > 6) {
        parcelas = 6
    } else {
        parcelas = aux
    }

*/
