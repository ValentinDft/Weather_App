export async function getWeather(city) {
    const requete = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98b7465353d383f3d0f3bc4a284a48ae&units=metric&lang=fr`)
    return requete.json()
}