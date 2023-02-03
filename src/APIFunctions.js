
const UNITS_METRIC = 'metric' 
//same function using async/await and using Promise for training both.
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
export function apiCallPromise(cityName){
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ea5bc7b59ef81a149e4999e17ee60551`;
    console.log(`city name: ${cityName}`)
    console.log(link)
    let data = fetch(link)
    .then((response) => response.json())
    .then((data) => data );

    return data;
}