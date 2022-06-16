import { domainToASCII } from "url";

async function getWeather(){
    
    try {
        const weather = await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=41.390205&lon=2.154007`)
        console.log("tiempo", weather);
        
        if (weather.status === 200) {
           let datosWeather = await weather.json();
            console.log("datos", datosWeather);
    
            let idWeather = document.getElementById('weather');
            if(idWeather) (idWeather as HTMLElement).innerHTML = `<img src="${datosWeather.weather[0].icon}"><img>`;
    
        }
    
    } catch (error) {
        console.log(error);
    }
    
};
    
getWeather();

const API_URL = 'https://icanhazdadjoke.com/'

const HTMLResponse = document.querySelector("#app");

let datos:any;

(document.getElementById("button") as HTMLElement).addEventListener("click", async function () {

    try {
        const response = await fetch(`${API_URL}`, {
            headers: {
                'Accept': "application/json"
            }
        })
        console.log(response);
        
        if (response.status === 200) {
                     
            datos = await response.json();
            console.log("datos", datos);
            let idApp= document.getElementById('app')
            if(idApp) (idApp as HTMLElement).innerHTML = datos.joke; 
            
        }

    } catch (error) {
        console.log(error);
    }
    console.log("hola");
    showButton();
});


function showButton(){
    console.log("button");
    (document.getElementById("botones") as HTMLElement).style.display = "block";
}

interface reportJokes {
    joke: string; 
    score: number; 
    data: string
};

let arrayReportJokes: reportJokes[] = [];

let punctuation = Array.from(document.getElementsByClassName("puntuacion") as HTMLCollectionOf<HTMLElement>);

punctuation.map(btn => {
    btn.addEventListener("click", function handleClick(){
        
        const report1 = {} as reportJokes;

        let date:Date = new Date();
        let text:string = date.toISOString();
    
        
        report1.joke = datos.joke;
        report1.score = parseInt(btn.getAttribute("data-value") as string);
        report1.data = text;
        
        arrayReportJokes.push(report1);
        console.log(arrayReportJokes);
    })
    
});
