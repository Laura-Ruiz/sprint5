export default class Api {
    constructor(url, header) {
        this.url = url;
        this.header = (header) ? header : {};
        this.datos;
    }
    getUrl() {
        return this.url;
    }
    getHeader() {
        return this.header;
    }
    async init() {
        try {
            const response = await fetch(this.getUrl(), {
                headers: this.getHeader()
            });
            if (response.status === 200) {
                this.datos = await response.json();
            }
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    ;
}
//# sourceMappingURL=Api.js.map