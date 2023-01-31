import {apiCallPromise, apiCallAwait} from './APIFunctions.js'

let dataPromiseBarcelona = apiCallPromise('barcelona');

let data = dataPromiseBarcelona.then((data) =>{
    console.log('data promise outside');
    console.log(data);

    console.log('testing')
    console.log(data.base);
})

let dataPromiseBarna2 = apiCallAwait('barcelona')
.then((data)=>{
    console.log('data await outside');
    console.log(data);

    console.log('testing await')
    console.log(data.base);

})

dataAwait.then((data)=>{
    console.log('last dance testing')
    console.log(data);
})