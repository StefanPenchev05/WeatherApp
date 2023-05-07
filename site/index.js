const apikey = "166cd4304640df33421572aeffaee337";

const weatherData = document.getElementById("weather_data");

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => 
{
    event.preventDefault();
    const cityInput = document.getElementById("city_input").value;
    getWeatherData(cityInput);
});


async function getWeatherData(cityInput)
{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apikey}&units=metric`);
        if(!response.ok){
            throw new Error("The Network response is an error, please try again later!");
        }
        const data = await response.json();

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${Math.round(data.main.humidity)}%`,
            `Wind spee: ${Math.round(data.wind.speed)}m/s`
        ]

         weatherData.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt = "Weather Icon">`;
         weatherData.querySelector(".temperature").textContent = `${Math.round(data.main.temp)}°C`;
         weatherData.querySelector(".description").textContent = `${data.weather[0].description}`;
         weatherData.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    } catch(error){

    }
}