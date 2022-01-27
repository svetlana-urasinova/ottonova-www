import { City } from "./City.js";
import { Loader } from "./Loader.js";

/* create a container for city elements */
export class CityList {
    #elem;
    #loader;

    constructor() {
        this.#elem = document.querySelector('.cities');
        this.#loader = new Loader;
    }

    getElem() {
        return this.#elem;
    }

    clear() {
        this.#elem.innerHTML = '';
    }

    render(dataPromise) {
        this.#loader.showLoader(true);
        dataPromise
            .then(data => {
                const cities = data.cities;
                this.clear();
                if (cities.length === 0) return;
                cities.forEach(cityData => {
                    const city = new City(cityData);
                    city.createElem();
                    /* create a li-wrapper for every city element */
                    const listElem = document.createElement('li');
                    listElem.classList.add('card');
                    /* get a city element */
                    listElem.append(city.getElem());
                    this.#elem.append(listElem);
                });
                this.#loader.showLoader(false);
            })
            .catch(err => {
                throw new Error(`Data loading error: ${err}`);
            });
    }
}