import { TemplateHandler } from "./../TemplateHandler.js";
import { ErrorHandler } from "./../ErrorHandler.js";
import template from "../../templates/City/main.template.js";
import templateLandmark from "../../templates/City/landmarks-item.template.js";
import templateSearchUrl from "../../templates/City/search-url.template.js";
import Formatter from "./../Formatter.js";

export class City {
    #elem;
    #data;

    constructor(data) {
        this.#data = data;
    }

    getElem() {
        return this.#elem
    }

    createSearchUrl = (name, latitude, longitude) => {
        /* creates Google Maps URL like 
            "https://www.google.com/maps?q=40.416775,-3.703790+(Madrid)&z=13&ll=40.416775,-3.703790",
             where q is for query (coorinates here), z is for zoom and ll is for marker */
        if (!name || !latitude || !longitude) {
            const errorMsg = ErrorHandler.createMsgVariablesAreMissing({ name, latitude, longitude });
            ErrorHandler.handle(errorMsg, name);
            return '';
        }
        const uri_safe_name = encodeURI(name);
        return TemplateHandler.handle(templateSearchUrl, { latitude, longitude, name: uri_safe_name });
    }

    createLandmarksList = (landmarks) => {
        /* creates content of landmarks list 
            each item is a list with a star symbol (<i class="fas fa-star"></i>) instead of list symbol)
        */

        if (!Array.isArray(landmarks)) {
            ErrorHandler.handle({ msg: `Corrupted landmarks!` });
            return '';
        }

        if (landmarks.length === 0) {
            return '';
        }
        return landmarks.map(landmark => TemplateHandler.handle(templateLandmark, { landmark })).join('');
    }

    createLocation = (country, continent) => {
        /* creates location container
            if both country and continent are defined: "country, continent"
            if only country: "country"
            if only continent: "continent"
            if both are undefined: empty string
        */
        const parts = [country, continent].filter(el => el && el !== '')
        return country || continent ? parts.join(', ') : '';
    }

    createAdditionalData () {
        const { name, country, continent, population, latitude, longitude, landmarks } = this.#data;
        const population_formatted = Formatter.addSeparatorsToNumber(population);
        const latitude_dms = Formatter.degreesToDMS(latitude, "x");
        const longitude_dms = Formatter.degreesToDMS(longitude, "y");
        const searchUrl = this.createSearchUrl(name, latitude, longitude);
        const location = this.createLocation(country, continent);
        const landmarks_str = this.createLandmarksList(landmarks);
        return { population_formatted, latitude_dms, longitude_dms, searchUrl, location, landmarks_str };
    }

    createElem() {
        this.#elem = document.createElement('article');
        this.#elem.classList.add('city');

        const templateData = {
            ...this.#data,
            ...this.createAdditionalData()
        };
        this.#elem.innerHTML = TemplateHandler.handle(template, templateData);
        return this.#elem;
    }

}