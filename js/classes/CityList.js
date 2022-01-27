import { City } from "./datamodels/City.js";

/* create a container for city elements */
export class CityList {
    #elem;
    #registry;
    #cities = [];

    constructor(registry) {
        this.#elem = document.querySelector('.cities');
        this.#registry = registry;
    }

    getElem() {
        return this.#elem;
    }

    async loadData() {
        const api = this.#registry.get('api');
        return await api.getData();
    }

    update() {
        const loader = this.#registry.get('loader');
        loader.showLoader(true);

        const dataPromise = this.loadData();
        dataPromise.then(data => {
            const citiesData = data.cities;
            for (let i in citiesData) {
                const city = new City(citiesData[i]);
                city.createElem();
                this.#cities.push(city);
            }
            this.render();
            loader.showLoader(false);
        })
            .catch(err => {
                throw new Error(`Data loading error: ${err}`);
            });
    }

    clear() {
        this.#elem.innerHTML = '';
    }

    render() {
        const cities = this.#cities;
        this.clear();
        for (let i in cities) {
            /* create a li-wrapper for every city element */
            const listElem = document.createElement('li');
            listElem.classList.add('card');

            /* add a city element inside li-wrapper */
            listElem.append(cities[i].getElem());

            this.#elem.append(listElem);
        }
    }
}