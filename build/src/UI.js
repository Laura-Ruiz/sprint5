let name = 1;
export default class UI {
    addJoke(joke) {
        const elementApp = document.getElementById('appJokes');
        if (elementApp)
            elementApp.innerHTML = joke;
    }
    addWeather(imageURL, temperature) {
        const elementWeather = document.getElementById('weather');
        const elementTemperature = document.getElementById('temperature');
        if (elementWeather)
            elementWeather.innerHTML = `<img src="${imageURL}"><img>`;
        if (elementTemperature)
            elementTemperature.innerHTML = `${temperature.toString()}ºC`;
    }
    showButtons() {
        document.getElementById("botones").style.display = "block";
    }
    modifySvg() {
        document.getElementById("svg1").src = `./svg/${name}.1.svg`;
        document.getElementById("svg2").src = `./svg/${name}.2.svg`;
        document.getElementById("svg3").src = `./svg/${name}.3.svg`;
        if ((name == 3)) {
            name = 1;
        }
        else {
            name++;
        }
    }
}
//# sourceMappingURL=UI.js.map