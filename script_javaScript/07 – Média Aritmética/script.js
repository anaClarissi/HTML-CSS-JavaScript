function calcular() {
    const primeiraNota = Number(document.getElementById('primeiraNota').value)
    const segundaNota = Number(document.getElementById('segundaNota').value)
    const resultado = document.getElementById('resultado')

    const media = (primeiraNota + segundaNota) / 2

    resultado.innerHTML = media.toFixed(1)
}