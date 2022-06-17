export default class UI{
    
    addJoke(joke:string){
        const elementApp= document.getElementById('appJokes')
        if(elementApp) (elementApp as HTMLElement).innerHTML = joke;
    }

    addWeather(imageURL:string, temperature:number){
        const elementWeather = document.getElementById('weather');
        const elementTemperature = document.getElementById('temperature');
        if(elementWeather) (elementWeather as HTMLElement).innerHTML = `<img src="${imageURL}"><img>`;
        if(elementTemperature ) (elementTemperature  as HTMLElement).innerHTML = `${temperature.toString()}ºC`;
    }
    
    showButtons(){
        (document.getElementById("botones") as HTMLElement).style.display = "block"
    }

}