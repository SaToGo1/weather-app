import {apiCallPromise, apiCallAwait, createActualWeatherObject} from './APIFunctions.js'

let dataPromiseBarcelona = apiCallPromise('barcelona');

let dataPromiseBarna2 = apiCallAwait('barcelona');
let dataPromiseNY = apiCallAwait('new york');

let weatherData = createActualWeatherObject(dataPromiseBarcelona)
.then((test) => {
    console.log('test')
    console.log(test);
});
/*
dataPromiseBarna2.then((data)=>{

    let date = dateBuilder(data.timezone)

    console.log('last dance testing')
    console.log(data);

    console.log(`City: ${data.name}`);

    console.log(`Humidity: ${data.main.humidity} %`);
    console.log(`wind speed: ${data.wind.speed} m/sec`);
    console.log(`pressure: ${data.main.pressure} hPa`);

    console.log(`temperature: ${data.main.temp} *C` );
    console.log(`temperature feels like: ${data.main.feels_like} *C` );

    console.log(`clouds: ${data.clouds.all} %`);

    console.log(`timezone: ${date}`);

    console.log(`weather: ${data.weather[0].description}`);
})

dataPromiseNY.then((data)=>{

    let date = dateBuilder(data.timezone)

    console.log('last dance testing')
    console.log(data);

    console.log(`City: ${data.name}`);

    console.log(`Humidity: ${data.main.humidity} %`);
    console.log(`wind speed: ${data.wind.speed} m/sec`);
    console.log(`pressure: ${data.main.pressure} hPa`);

    console.log(`temperature: ${data.main.temp} *C` );
    console.log(`temperature feels like: ${data.main.feels_like} *C` );

    console.log(`clouds: ${data.clouds.all} %`);

    console.log(`timezone: ${date}`);

    console.log(`weather: ${data.weather[0].description}`);
})
*/