import Api from "./Api.js";
export default class Weather extends Api {
    constructor() {
        super('https://fcc-weather-api.glitch.me/api/current?lat=41.390205&lon=2.154007', undefined);
        this.temperature = 0;
        this.imageUrl = "";
    }
    async getTemperature() {
        if (!this.datos)
            await this.init();
        this.temperature = this.datos.main.temp;
        return this.temperature;
    }
    async getImage() {
        if (!this.datos)
            await this.init();
        this.imageUrl = this.datos.weather[0].icon;
        return this.imageUrl;
    }
}
//# sourceMappingURL=class-weather.js.map