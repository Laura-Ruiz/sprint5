export default class Api {
    url: string;
    header: HeadersInit;
    datos: any;
    constructor(url: string, header: HeadersInit | undefined);
    getUrl(): string;
    getHeader(): HeadersInit;
    init(): Promise<boolean>;
}
