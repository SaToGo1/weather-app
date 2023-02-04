
const UNITS_METRIC = 'metric' 

/**
 * Function that recieves the name of the city and returns its data
 * 
 * @param {stirng} cityName name of the city to fetch data
 * @returns Promise with weather data of the city
 */
export async function apiCallAwait(cityName){
    let baseLink = `https://api.openweathermap.org/data/2.5/weather?`;
    let city = `q=${cityName}`;
    let key = `appid=ea5bc7b59ef81a149e4999e17ee60551`;
    let units = `units=${UNITS_METRIC}`;

    let link = baseLink + city + `&` + units + `&` + key;

    let response = await fetch(link);
    let data = response.json();
    return data;
}
//same function using async/await and using Promise for training both.
export function apiCallPromise(cityName){
    let baseLink = `https://api.openweathermap.org/data/2.5/weather?`;
    let city = `q=${cityName}`;
    let key = `appid=ea5bc7b59ef81a149e4999e17ee60551`;
    let units = `units=${UNITS_METRIC}`;

    let link = baseLink + city + `&` + units + `&` + key;

    let data = fetch(link)
    .then((response) => response.json())
    .then((data) => data );

    return data;
}

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
    //let hours = millitime.getHours();
    //let minutes = millitime.getMinutes();
    /*if(minutes < 10){
        minutes = `0${minutes}`;
    }*/

    return {
            full: `${day} ${date} ${month} ${year}`,
            hours: `${hours}:${minutes}`,
            dayHour: `${day}, ${hours}:${minutes}`
    }
}


export function createActualWeatherObject(promise){
    let weatherDataPromise = promise.then((data) => {
        let weatherData = { };
        let date = dateBuilder(data.timezone)

        //Header
        weatherData.name = data.name;

        //Temp section
        //+icon
        weatherData.temperature = data.main.temp;
        weatherData.tmpFeelsLike = data.main.feels_like;

        //subtemp section
        weatherData.humidity = data.main.humidity;
        weatherData.windSpeed = data.wind.speed;
        weatherData.clouds = data.clouds.all

        //Time section
        weatherData.date = date;
        weatherData.weatherDescription = data.weather[0].description;

        return weatherData
    })
    return weatherDataPromise;
}