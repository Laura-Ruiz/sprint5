import { domainToASCII } from "url";

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
