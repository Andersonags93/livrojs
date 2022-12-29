const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const terceiroProduto = preco / 2
    const total = (preco * 2) + terceiroProduto
    
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
    resp2.innerText = `O 3° Produto custa apenas R$: ${preco.toFixed(2)}`

    e.preventDefault()
})