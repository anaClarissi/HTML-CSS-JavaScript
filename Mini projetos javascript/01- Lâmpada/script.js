function quebrar() {
    var imagem = document.querySelector('img')
    imagem.setAttribute('src', 'imagens/quebrada.jpg')
    onclick = null
}

function ligar() {
    var imagem = document.querySelector('img')
    if (imagem.src.includes('imagens/quebrada.jpg')) {
        imagem.setAttribute('src', 'imagens/quebrada.jpg')
    }else {
        imagem.setAttribute('src', 'imagens/ligada.jpg')

    }
    

}

function desligar() {
    var imagem = document.querySelector('img')
    if (imagem.src.includes('imagens/quebrada.jpg')) {
        imagem.setAttribute('src', 'imagens/quebrada.jpg')
    } else {
    imagem.setAttribute('src', 'imagens/desligada.png')
        
    }

}