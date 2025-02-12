function converter() {
    let temperatura = document.getElementById('temperatura'.replace(',', '.'))
    
    if (temperatura.value.length == 0) {
        alert('Preencha a temperatura!')
        return
    }else {
        let temperaturaNovo = Number(temperatura.value)
        const fahreinheit = temperaturaNovo * 1.8 + 32
        const temperaturaCelcius = document.getElementById('temperaturaCelcius')
        const temperaturaFahrenheit = document.getElementById('temperaturaFahrenheit')
         
        temperaturaCelcius.innerHTML = `${temperaturaNovo.toFixed(1).replace('.' , ',')}°C`
        temperaturaFahrenheit.innerHTML = `${fahreinheit.toFixed(1).replace('.', ',')}°F`

       

        
    }
    
}