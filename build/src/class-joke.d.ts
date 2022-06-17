import Api from "./Api.js";
export default class Joke extends Api {
    joke: string;
    constructor();
    getJoke(): Promise<string>;
}
