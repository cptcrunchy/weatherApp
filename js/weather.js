const xhr = new XMLHttpRequest()
let cityNameElement = document.querySelector('.cityName')
let forecastDescriptionElement = document.querySelectorAll('.description')

forecastDescriptionElement.forEach( desc => console.log(desc))


let cityNameInput = 'San Antonio'
const apiParams = {
    appid: "0e25dfeca63103d3a311c460a9e27548",
    appUrl: "https://api.openweathermap.org/data/2.5/forecast?q="
}

const url = apiParams.appUrl+cityNameInput+'&APPID='+apiParams.appid
async function fetchWeather() {
    let data = await(await fetch(url)).json()
    return data
}

fetchWeather()
    .then(data => {
        cityNameElement.innerHTML = data.city.name

            
       
        console.log(data.list)
    })
    .catch(reason => console.log(reason.message))