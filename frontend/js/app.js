import data from "./json.tmp.js"; // tmp import
import { CityList } from "./classes/CityList.js";
import { ThemeSwitcher } from "./classes/ThemeSwitcher.js";

const themeSwitcher = new ThemeSwitcher();
const buttonThemeSwitcher = document.querySelector('.theme-switcher__btn');
buttonThemeSwitcher.addEventListener('click', () => { themeSwitcher.handler()});


const listElem = document.querySelector('.cities');
const list = new CityList(listElem);
list.update(data['cities']);