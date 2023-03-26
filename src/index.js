import {apiCallPromise, apiCallAwait, createActualWeatherObject} from './APIFunctions.js'
import lowTemp from './img/tempLow.svg';
import lowHigh from './img/tempHigh.svg';
import Temp from './img/temp.svg';

/*
#
#   API
#
*/
createActualWeatherObject(apiCallPromise('barcelona'))
.then((data) => {
    console.log('Barcelona Base')
    logData(data);

    displayData(data, temperatureDOM);
})

const logData = (data) => {
    console.log(`City: ${data.name}`);

    console.log(`temperature: ${data.temperature} *C` );
    console.log(`temperature feels like: ${data.tmpFeelsLike} *C` );

    console.log(`Humidity: ${data.humidity} %`);
    console.log(`wind speed: ${data.windSpeed} m/sec`);
    console.log(`clouds: ${data.clouds} %`);

    console.log(`time: ${data.date.dayHour}`);
    console.log(`weather: ${data.weatherDescription}`);
    console.log(` `);
}

/*
#
# DOM
#
*/

//Search
let searchButton = document.getElementById('searchButton');
let searchInput = document.getElementById('searchInput');

//Display data
let temperatureDOM = document.getElementById('temperature');
let humidityCloudsWindDOM = document.getElementById('humidity');
let cityNameDOM = document.getElementById('cityName');
let timeWeatherDOM = document.getElementById('timeWeatherData');


searchButton.addEventListener('click', ()=>{
    if( searchInput.value.length > 0){     
        createActualWeatherObject(apiCallPromise(searchInput.value))
        .then((data) => {
            logData(data);

            displayData(data, temperatureDOM);
        })
        .catch((er) => {
            alert('city not found')
        })
    }else{
        alert('introduce the name of a city');
    }
});


const displayData = (data) => {
    
    temperatureDOM.value=`${data.temperature}°C`;
    console.log(temperatureDOM);

    eraseDisplay();
    displayTemperature(data.temperature);
    displayHumidityWindClouds(data.humidity, data.clouds, data.windSpeed);
    displayCityName(data.name);
    displayTimeWeather(data.date.dayHour, data.weatherDescription);
    
}

const displayTemperature = (temp) => {
    let tempText = document.createElement('p');

    let tempImg = temperatureImage(temp);
    tempImg.classList.add('temperatureImg');

    tempText.classList.add('temperatureText');
    tempText.textContent = `${temp}°C`;

    temperatureDOM.append(tempImg);
    temperatureDOM.append(tempText);
}

const displayHumidityWindClouds = (humidity, clouds, windSpeed) => {
    let humidityText = document.createElement('p');
    let cloudsText = document.createElement('p');
    let windSpeedText = document.createElement('p');

    humidityText.classList.add('pText');
    cloudsText.classList.add('pText');
    windSpeedText.classList.add('pText');

    humidityText.textContent = `Humidity: ${humidity}%`;
    cloudsText.textContent = `clouds: ${clouds}%`;
    windSpeedText.textContent = `wind speed: ${windSpeed}m/sec`;

    humidityCloudsWindDOM.append(humidityText);
    humidityCloudsWindDOM.append(cloudsText);
    humidityCloudsWindDOM.append(windSpeedText);
}

const displayCityName = (cityName) => {
    let cityText = document.createElement('p');

    cityText.classList.add('cityText');
    cityText.textContent = `${cityName}`;

    cityNameDOM.append(cityText);
}

const displayTimeWeather = (dayHour, weatherDescription) => {
    let dayHourText = document.createElement('p');
    let weatherDescriptionText = document.createElement('p');

    dayHourText.classList.add('timeWeatherText');
    weatherDescriptionText.classList.add('timeWeatherText');

    dayHourText.textContent = `${dayHour}`;
    weatherDescriptionText.textContent = `${weatherDescription}`;

    timeWeatherDOM.append(dayHourText);
    timeWeatherDOM.append(weatherDescriptionText);
}

const eraseDisplay = () => {
    temperatureDOM.innerHTML = " ";
    humidityCloudsWindDOM.innerHTML = " ";
    cityNameDOM.innerHTML = " ";
    timeWeatherDOM.innerHTML = " ";

} 

const temperatureImage = (temp) => {
    const myIcon = new Image();
    console.log(" ")
    console.log(`temp here is: ${temp}`)
    console.log(" ")
    if(temp > 25){
        myIcon.src = highTemp;
    }else if(temp < 15){
        myIcon.src = lowTemp;
    }else {
        myIcon.src = Temp;
    }

    return myIcon;
}