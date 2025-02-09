function calcular() {
    var nome = document.getElementById('nome').value
    var altura = Number(document.getElementById('altura'.replace(',','.')).value)
    var peso = Number(document.getElementById('peso'.replace(',', '.')).value)
    var resultado = document.getElementById('resultado')
    var imc = peso / altura ** 2
    var situacao = ''

    if (isNaN(altura) || isNaN(peso) ) {
        resultado.innerHTML = 'Por favor, preencha os campos corretamente.'
    } else {
        if (imc < 18.5) {
            situacao = 'abaixo do peso'
        } else if (imc >= 18.5 && imc <= 24.9){
            situacao = 'nomal'
        } else if (imc >= 25 && imc <= 29.9){
            situacao = 'com sobrepeso'
        } else if (imc >= 30 && imc <= 34.9){
            situacao = 'com obesidade grau 1'
        } else if (imc >= 35 && imc <= 39.9){
            situacao = 'com obesidade grau 2 (severa)'
        } else if (imc > 40){
            situacao = 'com obesidade grau 3 (mórbida)'
        }

        resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(1).replace('.',',')} e você está  ${situacao}.`
    }
    

    
    
    
}