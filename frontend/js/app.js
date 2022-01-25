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