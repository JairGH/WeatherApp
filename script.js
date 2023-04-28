let input = document.querySelector("#search_btn");
let apiKey = "1f736240909b453c4de39fd47be912f6";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
let searchBox = document.querySelector(".city_search input");
let searchBtn = document.querySelector(".city_search button");
var today = dayjs().format(" MM/DD/YYYY");

async function weather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
  foreCast(data.coord.lat, data.coord.lon);
  document.querySelector("#city").innerHTML = data.name + today;
  document.querySelector("#temp").innerHTML = data.main.temp + "°F";
  document.querySelector("#wind").innerHTML = data.wind.speed + " MPH";
  document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
}
async function foreCast(lat, lon) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`;
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);
  display5(data.list);
}
function display5(data) {
  document.getElementById("space").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.dt_txt.includes("06:00:00")) {
      let panel = document.createElement("div");
      panel.innerHTML = `<h3>${dayjs(element.dt_txt).format("dddd, DD MM")}</h3>
        <p>Temp:${element.main.temp}</p>
        <p >Wind:${element.wind.speed}</p>
        <p>Humidity:${element.main.humidity}</p>`;

      document.getElementById("space").append(panel);
    }
  }
}
searchBtn.addEventListener("click", () => {
  weather(searchBox.value);
});
