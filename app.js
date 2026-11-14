
let checkWhether = async (cityName) => {

    try {

        let geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
        const geoResponse = await fetch(geocodingUrl)
        const geoData = await geoResponse.json()
        const lat = geoData.results[0].latitude
        const lon = geoData.results[0].longitude
        
        let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
        const weatherResponse = await fetch(weatherUrl)
        const weatherData = await weatherResponse.json()
    
        const displayData = {
            Temperature : weatherData.current.temperature_2m,
            Windspeed : weatherData.current.wind_speed_10m,
            Humidity : weatherData.current.relative_humidity_2m
        }
    
        return displayData
        
    } catch (error) {
        
        console.error("City name could not be fetched, try again", error.message);
    }
}

checkWhether('Berlin')

