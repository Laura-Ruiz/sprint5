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
});


   
