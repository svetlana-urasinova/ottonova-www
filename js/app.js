import { Registry } from "./classes/Registry.js";
import { ThemeSwitcher } from "./classes/ThemeSwitcher.js";
import { Api } from "./classes/Api.js";
import { Loader } from "./classes/Loader.js";
import { CityList } from "./classes/CityList.js";
import { documentClickHandler, citiesContainerClickHandler } from "./eventHandlers.js";

const registry = new Registry;

/* switches between dark and light theme */
registry.set('themeswitcher', new ThemeSwitcher);
registry.get('themeswitcher').start();
registry.set('api', new Api);
registry.set('loader', new Loader);

/* creates list of city elements */
const list = new CityList(registry);
list.update();
list.getElem().addEventListener('click', citiesContainerClickHandler);

document.addEventListener('click', documentClickHandler);