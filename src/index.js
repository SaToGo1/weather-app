import {apiCallPromise, apiCallAwait, createActualWeatherObject} from './APIFunctions.js'

/*
#
#   API
#
*/
let dataPromiseBarcelona = apiCallPromise('barcelona');

let dataPromiseBarna2 = apiCallAwait('barcelona');
let dataPromiseNY = apiCallAwait('new york');
let dataPromiseLondon = apiCallPromise('london');

dataPromiseLondon.then((data) => {
    console.log(data);
});

let weatherData = createActualWeatherObject(dataPromiseBarcelona)
.then((data) => {
    console.log('test')
    console.log(data);

    logData(data);
});

const logData = (data) => {
    console.log(`City: ${data.name}`);

    console.log(`temperature: ${data.temperature} *C` );
    console.log(`temperature feels like: ${data.tmpFeelsLike} *C` );

    console.log(`Humidity: ${data.humidity} %`);
    console.log(`wind speed: ${data.windSpeed} m/sec`);
    console.log(`clouds: ${data.clouds}`);

    console.log(`time: ${data.date.dayHour}`);
    console.log(`weather: ${data.weatherDescription}`);
}