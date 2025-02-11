function calcular() {
    //dados html
    const largura = Number(document.getElementById('largura'.replace(',', '.')).value)
    const altura = Number(document.getElementById('altura'.replace(',', '.')).value)
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    //tratamentos de dados
    const area = largura * altura
    const litrosDeTinta = area / 2
    const primeiroResultado = document.createElement('p')
    const segundoResultado = document.createElement('p')
  

    //saida de dados
    primeiroResultado.innerHTML = `Sua parede tem a dimensão de ${largura.toFixed(2).replace('.', ',')}x${altura.toFixed(2).replace('.', ',')} e sua área é de ${area.toFixed(2).replace('.', ',')}`

    segundoResultado.innerHTML = `Para pintar essa parede, você precisará de ${litrosDeTinta.toFixed(2).replace('.', ',')}L de tinta`

    resultado.appendChild(primeiroResultado)
    resultado.appendChild(segundoResultado)

   
}