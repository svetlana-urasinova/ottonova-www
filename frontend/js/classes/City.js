import TemplateHandler from "./TemplateHandler.js";
import template from "../templates/City/main.template.js";
import templateLandmark from "../templates/City/landmarks-item.template.js";
import templateSearchUrl from "../templates/City/search-url.template.js";

export default class City {
    #elem;
    #data;

    constructor(data) {
        this.#elem = document.createElement('article');
        this.#elem.classList.add('city');
        this.#data = data;
        this.render();
    }

    getElem() {
        return this.#elem;
    }

    createSearchUrl = () => {
        /* creates Google Maps URL like 
            "https://www.google.com/maps?q=40.416775,-3.703790+(Madrid)&z=13&ll=40.416775,-3.703790",
             where q is for query (coorinates here), z is for zoom and ll is for marker */
        const { name, latitude, longitude } = this.#data;
        const uri_safe_name = encodeURI(name);
        console.log(uri_safe_name)
        return TemplateHandler.handle(templateSearchUrl, { latitude, longitude, name: uri_safe_name });
    }

    createLandmarksList = () => {
        /* creates content of landmarks list 
            each item is a list with a star symbol (<i class="fas fa-star"></i>) instead of list symbol)
        */
        const { landmarks } = this.#data;
        return landmarks.map(landmark => TemplateHandler.handle(templateLandmark, { landmark })).join('');
    }

    createLocation = () => {
        /* creates location container
            if both country and continent are defined: "country, continent"
            if only country: "country"
            if only continent: "continent"
            if both are undefined: empty string
        */
        const { country, continent } = this.#data;
        return country && continent ? `${country}, ${continent}` : `${country ?? ''}${$continent ?? ''}`;
    }

    render() {
        const searchUrl = this.createSearchUrl();
        const location = this.createLocation();
        const landmarks = this.createLandmarksList();
        const templateData = {...this.#data, searchUrl, location, landmarks};
        this.#elem.innerHTML = TemplateHandler.handle(template, templateData);
    }

}