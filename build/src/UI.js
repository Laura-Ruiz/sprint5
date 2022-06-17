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
}
//# sourceMappingURL=UI.js.map