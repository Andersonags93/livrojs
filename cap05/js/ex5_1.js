const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = "" // Variável do tipo string, para concatenar a resposta
    for (let i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        // resposta = `${resposta}${numero} x ${i} = ${numero * 1}\n`
    }
    resp.innerText = resposta
})