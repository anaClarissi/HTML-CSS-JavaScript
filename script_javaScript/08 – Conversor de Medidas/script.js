function converter() {
    // Entrada de Dados
    var distancia = Number(document.getElementById('distancia').value)
    var metros = document.getElementById('metros')
    var km = document.getElementById('km')
    var hm = document.getElementById('hm')
    var dam = document.getElementById('dam')
    var dm = document.getElementById('dm')
    var cm = document.getElementById('cm')
    var mm = document.getElementById('mm')

    //Tratamento de dados
    var kmValor = distancia / 1000
    var hmValor = distancia / 100
    var damValor = distancia / 10

    var dmValor = distancia * 10
    var cmValor = distancia * 100
    var mmValor = distancia * 1000



    //Saida de dados
    metros.innerHTML = `A medida de ${distancia.toFixed(1)}m corresponde a`.replace('.', ',')

    km.innerHTML = `${kmValor}km`.replace('.', ',')
    hm.innerHTML = `${hmValor}hm`.replace('.', ',')
    dam.innerHTML = `${damValor}dam`.replace('.',',')
     
    dm.innerHTML = `${dmValor}dm`.replace('.', ',')
    cm.innerHTML = `${cmValor}cm`.replace('.', ',')
    mm.innerHTML = `${mmValor}mm`.replace('.', ',')


}