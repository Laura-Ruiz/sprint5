import { networkInterfaces } from "os";
import Joke from "./class-joke.js";


interface reportJokes {
    joke: string; 
    score: number; 
    data: string
};

export default class ReportJokes {
    
    arrayReportJokes: reportJokes[]

    constructor( ){
        this.arrayReportJokes = [];
    }
    
    addArrayReport(score:number, joke:string){
        let date:Date = new Date();
        let textDate:string = date.toISOString()
        //arrayReportJokes.push({...report1});
        this.arrayReportJokes.push({joke:joke, score:score, data:textDate});
        console.log(this.arrayReportJokes);
    }
  
}
