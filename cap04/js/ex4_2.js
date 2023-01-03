// Cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "Ouvinte" de evento, acionado quando o botão submit for clicaco
frm.addEventListener("submit", (e) => {
    e.preventDefault()                          // Evita o envio do form

    const nome = frm.inNome.value               // Obtém valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    /*
    Aqui utilizando if...else

    let peso            // Declara a variável peso
    if (masculino) {    // se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    */

    // Operador ternário (é o mesmo que utilizar o if...else)
    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2) 
    
    // Apresenta a resposta (altera o conteúdo do elemento h3 na página com a resposta)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})

frm.addEventListener("reset", () => {
    resp.innerText = "" // Limpa o conteúdo do elemento h3 que exibe a resposta
})