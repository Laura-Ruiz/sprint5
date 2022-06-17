interface reportJokes {
    joke: string;
    score: number;
    data: string;
}
export default class ReportJokes {
    arrayReportJokes: reportJokes[];
    constructor();
    addArrayReport(score: number, joke: string): void;
}
export {};
