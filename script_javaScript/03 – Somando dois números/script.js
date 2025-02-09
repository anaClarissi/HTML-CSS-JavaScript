function calcular() {
    const primeiroNumero = Number(document.getElementById('numero1').value)
    const segundoNumero = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const soma = primeiroNumero + segundoNumero

    resultado.innerHTML = ` = ${soma}`
}