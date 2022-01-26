import { CityList } from "./classes/CityList.js";
import { ThemeSwitcher } from "./classes/ThemeSwitcher.js";
import { Api } from "./classes/Api.js";

/* switches between dark and light theme */
const themeSwitcher = new ThemeSwitcher();
const buttonThemeSwitcher = document.querySelector('.theme-switcher__btn');
buttonThemeSwitcher.addEventListener('click', () => { themeSwitcher.handler()});

/* creates Api objects and receives data from it */
const api = new Api;
const data = api.getData();

/* creates list of city elements */
const listElem = document.querySelector('.cities');
const list = new CityList(listElem);
list.render(data);

const documentClickHandler = (event) => {
    if (!event.target.classList.contains('modal')) {
        const modal = document.querySelector('.modal._active');
        if (modal) {
            modal.classList.remove('_active');
        }
    }
}
document.addEventListener('click', documentClickHandler);

/* add some life to stars ;D */
const starSecretAnimation = (obj) => {
    obj.classList.add('marker-star--active');
    setTimeout(() => {
        obj.classList.remove('marker-star--active');
    }, 1500);
} 

const modalOpen = (obj) => {
    const parent = obj.closest('.city__location');
    const modal = parent.querySelector('.modal');    
    modal.classList.add('modal--active');
}

const modalClose = (obj) => {
    obj.classList.remove('modal--active');
}

const modalCloseAll = () => {
    const modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modalClose(modals[i]);
    }
}

const listClickHandler = (event) => {
    if (!event.target.closest('.modal')) {
        modalCloseAll();
    }
     
    if (!(event.target.tagName === 'I')) return false;
    const parent = event.target.parentNode;

    if (parent.classList.contains('marker-star')) {
        starSecretAnimation(parent);
    } else if (parent.classList.contains('city__location-marker')) {
        event.preventDefault();
        modalOpen(parent);
    } else if (parent.classList.contains('modal__close-button')) {
        const modal = event.target.closest('.modal');
        modalClose(modal);
    }
}
listElem.addEventListener('click', listClickHandler);