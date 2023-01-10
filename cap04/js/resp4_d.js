const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPodeTriangulo")
const resp2 = document.querySelector("#outTipoTriangulo")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        resp1.innerText = `Lados não podem formar um triângulo!`
    } else {
        resp1.innerText = `Lados podem formar um triângulo!`
        if (ladoA == ladoB && ladoA == ladoC) {
            resp2.innerText = `Tipo: Equilátero (3 Lados iguais)`
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            resp2.innerText = `Tipo: Isóceles (2 lados iguais)`
        } else {
            resp2.innerText = `Tipo: Escaleno (3 lados diferentes)`
        }
    }
})