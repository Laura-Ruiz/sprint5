var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const weather = yield fetch(`https://fcc-weather-api.glitch.me/api/current?lat=41.390205&lon=2.154007`);
            console.log("tiempo", weather);
            if (weather.status === 200) {
                let datosWeather = yield weather.json();
                console.log("datos", datosWeather);
                let idWeather = document.getElementById('weather');
                if (idWeather)
                    idWeather.innerHTML = `<img src="${datosWeather.weather[0].icon}"><img>`;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
getWeather();
const API_URL = 'https://icanhazdadjoke.com/';
const HTMLResponse = document.querySelector("#app");
let datos;
var handler = 0;
document.getElementById("button").addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (handler == 0) {
            myFirstHandler();
            handler = 1;
        }
        else {
            mySecondHandler();
            handler = 0;
        }
        showButton();
    });
});
function myFirstHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${API_URL}`, {
                headers: {
                    'Accept': "application/json"
                }
            });
            console.log(response);
            //Si la respuesta es correcta
            if (response.status === 200) {
                datos = yield response.json();
                console.log("datos", datos);
                let idApp = document.getElementById('app');
                if (idApp)
                    idApp.innerHTML = datos.joke;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
function mySecondHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response2 = yield fetch(`https://api.chucknorris.io/jokes/random`, {});
            console.log(response2);
            //Si la respuesta es correcta
            if (response2.status === 200) {
                datos = yield response2.json();
                console.log("datos", datos);
                let idApp = document.getElementById('app');
                if (idApp)
                    idApp.innerHTML = datos.value;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
function showButton() {
    console.log("button");
    document.getElementById("botones").style.display = "block";
}
;
let arrayReportJokes = [];
let punctuation = Array.from(document.getElementsByClassName("puntuacion"));
punctuation.map(btn => {
    btn.addEventListener("click", function handleClick() {
        const report1 = {};
        let date = new Date();
        let text = date.toISOString();
        report1.joke = datos.joke;
        report1.score = parseInt(btn.getAttribute("data-value"));
        report1.data = text;
        arrayReportJokes.push(report1);
        console.log(arrayReportJokes);
    });
});
export {};
//# sourceMappingURL=index.js.map