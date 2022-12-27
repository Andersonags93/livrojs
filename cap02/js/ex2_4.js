const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.AddEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)
    
    const valor = (quilo / 1000) * consumo
    resp.innerText = ˋValor a pagar R$: ${valor.toFixed(2)}ˋ
    
    e.preventDefault()
})

