import Api from "./Api.js";
export default class Norris extends Api {
    joke: string;
    constructor();
    getJoke(): Promise<string>;
}
