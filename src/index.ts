import { domainToASCII } from "url";
import Joke from "./class-joke.js";
import Norris from "./class-Norris.js";
import Weather from "./class-weather.js";
import ReportJokes from "./ReportJokes.js";
import UI from "./UI.js";


//API WEATHER
const apiWeather = new Weather()
let temperature = await apiWeather.getTemperature()
let weatherImage = await apiWeather.getImage()

//API JOKE
const apiJoke = new Joke();

//API NORRIS 
const apiNorris= new Norris();

//API UI
const apiUi = new UI();
apiUi.addWeather(weatherImage, temperature);

var handler = 0;
let joke = "";
(document.getElementById("button") as HTMLElement).addEventListener("click", async function () {
    if(handler == 0){
        joke = await apiJoke.getJoke();
        apiUi.addJoke(joke);
        handler =1;
    }else  {
        joke = await apiNorris.getJoke(); 
        apiUi.addJoke(joke);
        handler = 0
    }
    apiUi.showButtons();
});


//API REPORT JOKES
const apiReport = new ReportJokes();
let score = 0;

let punctuation = Array.from(document.getElementsByClassName("puntuacion") as HTMLCollectionOf<HTMLElement>);
punctuation.map(btn => {
    btn.addEventListener("click", async function handleClick(){
        score = parseInt(btn.getAttribute("data-value") as string);
        console.log(score);
        apiReport.addArrayReport(score,joke);
        
    })
});


