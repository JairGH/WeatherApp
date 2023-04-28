// const input = document.querySelector("#search_btn");
// const apiKey = "1f736240909b453c4de39fd47be912f6";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
// let searchBox = document.querySelector(".city_search input");
// let searchBtn = document.querySelector(".city_search button");
// var today = dayjs().format(" MM/DD/YYYY");

// async function weather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   const data = await response.json();

//   console.log(data);

//   document.querySelector("#city").innerHTML = data.name + today;
//   document.querySelector("#temp").innerHTML = data.main.temp + "°F";
//   document.querySelector("#wind").innerHTML = data.wind.speed + " MPH";
//   document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
// }

// searchBtn = addEventListener("click", () => {
//   weather(searchBox.value);
// });
