import { City } from "./City.js";

/* create a container for city elements */
export class CityList {
    #elem;

    constructor(elem) {
        this.#elem = elem;
    }

    render(dataPromise) {
        this.#elem.innerHTML = '';
        dataPromise
            .then(data => {
                const cities = data.cities;
                if (cities.length === 0) return;
                cities.forEach(cityData => {
                    const city = new City(cityData);
                    /* create a li-wrapper for every city element */
                    const listElem = document.createElement('li');
                    listElem.classList.add('card');
                    /* get a city element */
                    listElem.append(city.getElem());
                    this.#elem.append(listElem);
                });
            })
            .catch(err => {
                throw new Error(`Data loading error: ${err}`);
            });
    }
}