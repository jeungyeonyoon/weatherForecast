
const weather = () => {
    
    const searchButton = document.querySelector("#search");
    searchButton.addEventListener("click", () =>{
        const cityInput = document.querySelector("#cityInput").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=d3b860dd5e872e58c80eb309e3fe52fd`;



        fetch(url)
            .then(response => {
              return response.json();

            })
            .then(data => {
            const temperature = data.main.temp;
            const cityName = data.name;
            const weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            const minTemp = data.main.temp_min;
            const maxTemp = data.main.temp_max;

            document.querySelector("#cityname").innerHTML = cityName;
            document.querySelector("#temperature").innerHTML = temperature + "F";
            document.querySelector("#weathericon").src = weatherIcon;
            document.querySelector("#minTemp").innerHTML = minTemp;
            document.querySelector("#maxTemp").innerHTML = maxTemp;
            
            });


// const response = await fetch(url);
// const data = await response.json();
// console.log(data);

        });

};

weather();





// function getWeather(){
//     const waether = new XMLHttpRequest();
//     waether.open('GET', 'http://https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=d3b860dd5e872e58c80eb309e3fe52fd', ture);

//     waether.send();

//     waether.onload = function(){
//         const weatherCondition = JSON.parse(weather.responseText);

//         document.getElementById('cityname').innerHTML = 'Rexburg, ' + weathercondition.name;
//         document.getElementById('texperature').innerHTML = weathercondition.main.temp;
//         document.getElementById('tempmax').innerHTML = weathercondition.main.temp_max;
//         document.getElementById('tempmin').innerHTML = weathercondigion.main.temp_min;
//         document.getElementById('weather').innerHTML = weathercondigion.weather[0].description;    
//         document.getElementById('weathericon').src = 'http://openweathermap.org/img/w/' + weathercondition.weather[0].icon + '.png';
//     }

//     const forecast = new XMLHttpRequest();
//     forecast.open('GET', 'http://https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=d3b860dd5e872e58c80eb309e3fe52fd', true );
//     forecast.send();

//     forecast.onload = function(){

//         const forecastcondition = JSON.parse(forecast.responseText).forecast.simpleforecast.forecastday;
        
//     }
// }