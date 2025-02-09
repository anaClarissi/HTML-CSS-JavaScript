function calcular() {
    const numero = Number(document.getElementById('numero').value)
    const dobro = document.getElementById('dobro')
    const triplo = document.getElementById('triplo')
    const raizQuadrada = document.getElementById('raizQuadrada')

    dobro.innerHTML = numero * 2
    triplo.innerHTML = numero * 3
    raizQuadrada.innerHTML = Math.sqrt(numero).toFixed(2)

}

