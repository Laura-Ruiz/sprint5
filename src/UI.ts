let name:number = 1;

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

    modifySvg(){

        (document.getElementById("svg1")as HTMLImageElement).src = `./svg/${name}.1.svg`;
        (document.getElementById("svg2")as HTMLImageElement).src = `./svg/${name}.2.svg`;
        (document.getElementById("svg3")as HTMLImageElement).src = `./svg/${name}.3.svg`;
        
        if((name == 3)){
            name = 1;
            
        }else{
            name++;
            
        }
    }
}