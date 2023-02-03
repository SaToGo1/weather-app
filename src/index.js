import {apiCallPromise, apiCallAwait} from './APIFunctions.js'

let dataPromiseBarcelona = apiCallPromise('barcelona');

let dataPromiseBarna2 = apiCallAwait('barcelona');

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

const dateBuilder = (timezone) => {
   
    const nowInLocalTime = Date.now()  + 1000 * (timezone / 3600);
    const millitime = new Date(nowInLocalTime);
    const dateFormat = millitime.toLocaleString();

    let day = millitime.toLocaleString("en-US", {weekday: "long"});
    let month = millitime.toLocaleString("en-US", {month: "long"}); 
    let date = millitime.toLocaleString("en-US", {day: "numeric"});
    let year = millitime.toLocaleString("en-US", {year: "numeric"}); 
    let hours = millitime.toLocaleString("en-US", {hour: "numeric"}); 
    let minutes = millitime.toLocaleString("en-US", {minute: "numeric"});

    return `${day} ${date} ${month} ${year} ${hours}:${minutes}`;
}


let dataPromiseNY = apiCallAwait('new york');

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