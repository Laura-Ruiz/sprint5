import Api from "./Api.js";

export default class Joke extends Api {
    joke: string; 
    
    constructor() {
        super('https://icanhazdadjoke.com/', {'Accept': "application/json"});
        this.joke = "";
        
    }

    async getJoke(){
        await this.init();
        this.joke = this.datos.joke;
        return this.joke;
    }
    
}