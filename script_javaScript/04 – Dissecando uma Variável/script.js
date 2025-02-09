function dissecar() {
    const texto = document.getElementById('texto').value; // Obtém o valor do input
    const texto1 = document.getElementById('texto1');
    const texto2 = document.getElementById('texto2');
    const texto3 = document.getElementById('texto3');
    const texto4 = document.getElementById('texto4');
    const texto5 = document.getElementById('texto5');
    const texto6 = document.getElementById('texto6');
    const texto7 = document.getElementById('texto7');
    const texto8 = document.getElementById('texto8');

    // Exibe os resultados
    texto1.innerHTML = 'O tipo primitivo desse valor é: ' + typeof texto;
    texto2.innerHTML = 'Só tem espaços? ' + /^\s*$/.test(texto);
    texto3.innerHTML = 'É um número? ' + (!isNaN(texto) && !isNaN(parseFloat(texto)));
    texto4.innerHTML = 'É alfabético? ' + /^[A-Za-z]+$/.test(texto);
    texto5.innerHTML = 'É alfanumérico? ' + /^[A-Za-z0-9]+$/.test(texto);
    texto6.innerHTML = 'Está em maiúsculas? ' + (texto === texto.toUpperCase() && texto !== '');
    texto7.innerHTML = 'Está em minúsculas? ' + (texto === texto.toLowerCase() && texto !== '');
    texto8.innerHTML = 'Está capitalizada? ' + (texto === texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase());
}