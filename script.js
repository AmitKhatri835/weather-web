const inputbox = document.querySelector('.input-box')
const searchbtn = document.getElementById('searchbtn')
const weatherimg = document.querySelector('.weather-img')
const temprature = document.querySelector('.temprature')
const discription = document.querySelector('.discription')
const humidity = document.getElementById('humidity')
const windspeed = document.getElementById('wind-speed')
const locationnotfound = document.querySelector('.location-not-found')
const weatherbody = document.querySelector('.weather-body')


async function checkweather(city) {
    const api_key = "907e557fb85e4ff215af66c9376efb7a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(Response =>
    Response.json());

    if(weather_data.cod === `404`){
        locationnotfound.style.display = "flex";
        weatherbody.style.display = "none";
        return;
    }

    locationnotfound.style.display = "none";
    weatherbody.style.display = "flex";
    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;
    discription.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    windspeed.innerHTML = `${weather_data.wind.speed}km/h`


    switch(weather_data.weather[0].main){
        case 'Clouds' : weatherimg.src = "images/cloud.png"
        break;
        case 'Clear' : weatherimg.src = "images/clear.jpg"
        break;
        case 'Rain' : weatherimg.src = "images/rain.jpg"
        break;
        case 'Mist' : weatherimg.src = "images/mist.jpg"
        break;
        case 'Snow' : weatherimg.src = "images/snow.jpg"
        break;
    }

    console.log(weather_data)
}

searchbtn.addEventListener('click', () => {
    checkweather(inputbox.value);

});
