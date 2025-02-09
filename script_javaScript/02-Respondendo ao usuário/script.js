function clicar() {
    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem')

    mensagem.innerHTML = `É um prazer te conhecer, ${nome}!`
}