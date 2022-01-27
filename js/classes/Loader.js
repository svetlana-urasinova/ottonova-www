export class Loader {
    #elem;

    constructor(elem) {
        this.#elem = document.querySelector('.loader');
    }

    showLoader(show) { 
        if (show) {
            this.#elem.classList.remove('hidden');
        } else {
            this.#elem.classList.add('hidden');
        }
    }
}