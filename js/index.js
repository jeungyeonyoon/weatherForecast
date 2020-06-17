
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
            

              
            const currentDate = new Date();

            const days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
            const temperature = data.main.temp;
            const cityName = data.name;
            //const weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            const weatherIcon = "../img/" + data.weather[0].icon + ".png";

            const minTemp = data.main.temp_min;
            const maxTemp = data.main.temp_max;

            const minArrow = document.querySelector("#minArrow img");
            const maxArrow = document.querySelector("#maxArrow img");
            minArrow.style.display = "block";
            maxArrow.style.display = "block";
            // const imgmin= document.createElement("img");
            // imgmin.src ="../img/arrow-01.jpg";
            // const src = document.getElementById("minArrow");
            // src.innerHTML=imgmin;

            // const imgmax = document.createElement("img");
            // imgmax.src = "../img/arrow-02.jpg";
            // const srcmax = document.getElementById("maxArrow");
            // src.innerHTML=imgmax;


            const exercises = { "Clouds" : "#aerobicexercise #hometraiing #tennis #cycling #uno", 
            "Clear": "#gooutside #energetic #running #walking #sunbath",
            "Thunderstorm": "#stayathome #movie #reading #staysafe #relax",
            "Drizzle": "#indooractivity #yoga",
            "Rain": "#stretching #yoga #indooractivity #meditation #movie",
            "Snow": "#skiing #snowboarding #buildingasnowman #hotchololate",
            "Mist": "#anyactivity #jogging #tennis",
            "Smoke": "#anyactivity #jogging #tennis",
            "Dust": "#anyactivity #jogging #tennis",
            "Fog": "#anyactivity #jogging #tennis",
            "Sand": "#anyactivity #jogging #tennis",
            "Dust": "#anyactivity #jogging #tennis",
            "Ash": "#anyactivity #jogging #tennis",
            "Squall": "#anyactivity #jogging #tennis",
            "Tornado": "#anyactivity #jogging #tennis"

             
          };

            document.querySelector("#cityname").innerHTML = cityName;
            document.querySelector("#temperature").innerHTML = temperature + " °F";
            document.querySelector("#weatherIcon").src = weatherIcon;
            document.querySelector("#minTemp").innerHTML = minTemp + "°F";
            document.querySelector("#maxTemp").innerHTML = maxTemp + "°F";
            document.querySelector("#currentdate").innerHTML = days[currentDate.getDay()];
            document.querySelector("#exercise").innerHTML = exercises[data.weather[0].main];
            
            });

            

            // if(data.weather.main == "Clouds"){
            //   weatherIcon = "03d.png";
            // }

            // if(data.weather.main == "Clear"){
            //   weatherIcon = "01d.png";
            // }

            // if(data.weather.main == "Atmosphere"){
            //   weatherIcon = "atmosphere.png";
            // }

            // if(data.weather.main == "Snow"){
            //   weatherIcon = "snow.png";
            // }

            // if(data.weather.main == "Rain"){
            //   weatherIcon = "rain.png";
            // }

            // if(data.weather.main == "Drizzle"){
            //   weatherIcon = "drizzle.png";
            // }
            // if(data.weather.main == "Thunderstorm"){
            //   weatherIcon = "thunderstorm.png";
            // }
            
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