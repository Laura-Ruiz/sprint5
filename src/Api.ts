import { getEnabledCategories } from "trace_events";

export default class Api {
    
    url: string;
    header: HeadersInit;
    datos: any;

    constructor(url:string, header:HeadersInit|undefined){
        this.url = url;
        this.header = (header) ? header : {};
        this.datos;
    }

    getUrl(){
        return this.url;
    }
    getHeader(){
        return this.header;
    }
   

    async init(){
        try {
            const response = await fetch(this.getUrl(), {
                headers: this.getHeader()
                
            })
            
            if (response.status === 200) {
                this.datos = await response.json();
            }
            return true;

        } catch (error) {
            console.log(error);
            return false
        }
        
    };
}