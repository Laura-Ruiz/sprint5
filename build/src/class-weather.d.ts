import Api from "./Api.js";
export default class Weather extends Api {
    temperature: number;
    imageUrl: string;
    constructor();
    getTemperature(): Promise<number>;
    getImage(): Promise<string>;
}
