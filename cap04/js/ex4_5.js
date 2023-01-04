const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let raizQuadrada = Math.sqrt(numero)

    if (Number.isInteger(raizQuadrada)) {
        resp.innerText = `Raiz: ${raizQuadrada}`
    } else {
        resp.innerText = `Não há raiz exata para ${raizQuadrada.toFixed(2)}`
    }
})