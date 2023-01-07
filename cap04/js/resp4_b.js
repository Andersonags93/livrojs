const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)  => {
    e.preventDefault()

    const velPermitida = Number(frm.inVelPermitida.value)
    const velCondutor = Number(frm.inVelCondutor.value)

    if (velCondutor <= velPermitida) {
        resp.innerText = "Situação: Sem multa"
    } else {
        const maisVinte = velPermitida * 1.2
        if (velCondutor <= maisVinte) {
            resp.innerText = "Situação: Multa leve"
        } else {
            resp.innerText = "Situação: Multa grave"
        }
    }
})