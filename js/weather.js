const API_KEY = "b714657dd0c3c74244f01581d5d9f1bd";
const weatherIconList = {
  "01": "fas fa-sun",
  "02": "fas fa-cloud-sun",
  "03": "fas fa-cloud",
  "04": "fas fa-cloud-meatball",
  "09": "fas fa-cloud-sun-rain",
  10: "fas fa-cloud-showers-heavy",
  11: "fas fa-poo-storm",
  13: "far fa-snowflake",
  50: "fas fa-smog",
};
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const today = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const daily = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(today)
    .then((Response) => Response.json())
    .then((data) => {
      const weatherToday = document.querySelector(
        ".weather__today__main__text__title"
      );
      const city = document.querySelector(".weather__today__main__text__city");
      const weatherIcon = document.querySelector(".weather__today__main__icon");
      const icon = data.weather[0].icon.substr(0, 2);
      const humidity = document.querySelector(
        ".weather__today__other__humidity"
      );
      const wind = document.querySelector(".weather__today__other__wind");
      weatherToday.innerText = `${data.weather[0].main}/${data.main.temp}°C`;
      city.innerText = data.name;
      weatherIcon.innerHTML = `<i class="${weatherIconList[icon]}"></i>`;
      humidity.innerHTML = `<i class="fa-solid fa-droplet"></i><span>${data.main.humidity}%</span>`;
      wind.innerHTML = `<i class="fa-solid fa-wind"></i><span>${data.wind.speed}km/h</span>`;
    });
  fetch(daily)
    .then((Response) => Response.json())
    .then((data) => {
      for (let i = 0; i < 4; i++) {
        const weatherDailyIcon = document.querySelector(
          `.weather__daily-summary${i} .weather__daily__main__icon`
        );
        const dailyWeek = document.querySelector(
          `.weather__daily-summary${i} .weather__daily__main__day`
        );
        const tempMax = document.querySelector(
          `.weather__daily-summary${i} .weather__daily__other__temp-max`
        );
        const humidity = document.querySelector(
          `.weather__daily-summary${i} .weather__daily__other__humidity`
        );
        if (weatherDailyIcon) {
          const icon = data.list[i * 8].weather[0].icon.substr(0, 2);
          const day = new Date(data.list[i * 8].dt * 1000).getDay();
          weatherDailyIcon.innerHTML = `<i class="${weatherIconList[icon]}"></i>`;
          dailyWeek.innerText = `${week[day]}`;
          tempMax.innerText = `${Math.floor(data.list[i * 8].main.temp_max)}°C`;
          humidity.innerText = `${Math.floor(data.list[i * 8].main.humidity)}%`;
        }
      }
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
