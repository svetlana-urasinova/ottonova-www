import { config } from './../config/api.js';

export class Api {
    #baseUrl = `${config.url}cities/`

    async makeRequest(method, url) {
        const options = {
            method, 
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            }
        };
        return await fetch(url, options)
            .then(response => response.json());
    }

    async getData() {
        const url = this.#baseUrl;
        const method = 'GET';
        return await this.makeRequest(method, url); 
    }
}