import City from "./City.js";

export default class CityList {
    #cities = [];
    #elem;

    constructor(elem) {
        this.#elem = elem;
    }

    update(data) {
        for (let i in data) {
            this.#cities.push(new City(data[i]));
        }
        this.render();
    }

    render() {
        this.#elem.innerHTML = '';
        if (this.#cities.length === 0) return;
        this.#cities.forEach(city => {
            const listElem = document.createElement('li');
            listElem.classList.add('card');
            listElem.append(city.getElem());
            this.#elem.append(listElem);
        });
    }
}