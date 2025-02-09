function antecessorSucessor() {
    const numero = Number(document.getElementById('numero').value)
    const antecessor = document.getElementById('antecessor')
    const sucessor = document.getElementById('sucessor')

    antecessor.innerHTML = numero - 1
    sucessor.innerHTML = numero + 1
}