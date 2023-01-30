export async function apiCallAwait(cityName){
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ea5bc7b59ef81a149e4999e17ee60551`;
    let response = await fetch(link);
    
    console.log(response);
    console.log(response.json());
}


export function apiCallPromise(cityName){
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ea5bc7b59ef81a149e4999e17ee60551`;
    console.log(`city name: ${cityName}`)
    console.log(link)
    let data = fetch(link)
    .then((response) => {
        console.log('response');
        console.log(response);
        console.log('response.json');
        //console.log(response.json());
        return response.json();
    })
    .then((data) => {
        console.log('data');
        console.log(data);
        return data;
    })

    return data;
}