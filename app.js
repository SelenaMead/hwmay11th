const apiKey = '3da49d618e373b6773ac91da140b45de'
const apiLink = 'https://api.openweathermap.org/data/2.5/weather'

inputWeather = document.querySelector('.weather-here')


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Akron&appid=${apiKey}&units=imperial`)
.then(res => res.json())
.then(data => {
    let weatherData = {
        forecast: data.weather[0].main,
        high: data.main.temp_max,
        low: data.main.temp_min,
        humidity: data.main.humidity
        
    }
    console.log(weatherData)
    
    inputWeather.innerText = 'Forecaset: ' + weatherData.forecast + ' High: ' +  weatherData.high + ' Low: '  +  weatherData.low + ' Humidity: ' + weatherData.humidity;
})


