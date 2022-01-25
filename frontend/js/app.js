import data from "./json.tmp.js"; // tmp import
import CityList from "./classes/CityList.js";

const listElem = document.querySelector('.cities');
const list = new CityList(listElem);
list.update(data['cities']);