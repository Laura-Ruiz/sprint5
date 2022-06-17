import Api from "./Api.js";
export default class Norris extends Api {
    constructor() {
        super('https://api.chucknorris.io/jokes/random', { 'Accept': "application/json" });
        this.joke = "";
    }
    async getJoke() {
        await this.init();
        this.joke = this.datos.value;
        return this.joke;
    }
}
//# sourceMappingURL=class-Norris.js.map