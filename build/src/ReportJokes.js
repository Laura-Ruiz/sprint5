;
export default class ReportJokes {
    constructor() {
        this.arrayReportJokes = [];
    }
    addArrayReport(score, joke) {
        let date = new Date();
        let textDate = date.toISOString();
        //arrayReportJokes.push({...report1});
        this.arrayReportJokes.push({ joke: joke, score: score, data: textDate });
        console.log(this.arrayReportJokes);
    }
}
//# sourceMappingURL=ReportJokes.js.map