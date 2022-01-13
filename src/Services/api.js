export async function getWeather(city) {
    const requete = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric&lang=fr`)
    return requete.json()
}