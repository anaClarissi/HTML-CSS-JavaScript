function reajustar() {
    let salario = document.getElementById('salario'.replace(',', '.'))
    
    if (salario.value.length == 0) {
        alert('Preencha o salário!')
        return
    }else {
        let salarioNovo = Number(salario.value)
        let desconto = salarioNovo * (15/100)
        let salarioNovoComAumento = salarioNovo + desconto
        const resultadoSalarioSemAumento = document.getElementById('salarioSemAumento')
        const resultadoSalarioComAumento = document.getElementById('salarioComAumento')
         
        resultadoSalarioSemAumento.innerHTML = `${salarioNovo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        resultadoSalarioComAumento.innerHTML = `${salarioNovoComAumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

       

        
    }
    
}