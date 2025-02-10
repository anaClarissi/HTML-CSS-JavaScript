const imagem = document.getElementById('imagem');
const botoes = document.getElementById('botoes');
let corIndex = 0;
let intervaloID = null;

const semaforo = ( event ) => {
    pararAutomatico();
    ligar[event.target.id]();
}

const proximoIndex = () => {
    corIndex = corIndex < 2 ? ++corIndex : 0;
    
}

const mudarCor = () => {
    const cores = ['vermelho', 'amarelo', 'verde']
    const cor = cores[corIndex];
    ligar[cor]();
    proximoIndex();
}

const pararAutomatico = () => {
    clearInterval(intervaloID);
}

const ligar = {
    'vermelho': () => imagem.src = 'imagens/vermelho.png',
    'amarelo': () => imagem.src = 'imagens/amarelo.png',
    'verde': () => imagem.src = 'imagens/verde.png',
    'automatico': () => intervaloID = setInterval(mudarCor, 1000)
}

botoes.addEventListener('click', semaforo);
