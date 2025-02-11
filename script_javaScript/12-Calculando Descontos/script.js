function calcular() {
    let preco = document.getElementById('preco'.replace(',', '.'))
    
    if (preco.value.length == 0) {
        alert('Preencha o preço!')
        return
    }else {
        let precoNovo = Number(preco.value)
        let desconto = precoNovo * 0.05
        let precoNovoComDesconto = precoNovo - desconto
        const resultadoPrecoSemDesconto = document.getElementById('precoSemDesconto')
        const resultadoPrecoComDesconto = document.getElementById('precoComDesconto')
         
        resultadoPrecoSemDesconto.innerHTML = `${precoNovo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        resultadoPrecoComDesconto.innerHTML = `${precoNovoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

       

        
    }
    
}