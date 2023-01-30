import {apiCallPromise} from './APIFunctions.js'

let dataP = apiCallPromise('barcelona');

dataP.then((data) =>{
    console.log('data outside');
    console.log(data);

    console.log('testing')
    console.log(data.base);
})
