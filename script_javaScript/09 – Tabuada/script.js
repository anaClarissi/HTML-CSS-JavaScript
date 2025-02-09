let cont = 0
function calcular() {
    var numero = Number(document.getElementById('numero').value)
    var resultado = document.getElementById('resultado')
    
    let cont = 0
    let i = 1
    while (i <= 10) {
        resultado.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`
        i++
        
        
    }
    

}

function limpar(){
    var numeros = document.getElementById('resultado')
    numeros.innerHTML = ''
}