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
        const { name, latitude, longitude } = this.#data;
        return `http://maps.google.com/maps?q=${latitude},${longitude}+(${name})&ll=${latitude},${longitude}`;
    }

    render() {

        const { name, name_native, country, continent, latitude, longitude, population, founded, landmarks } = this.#data;

        const location = country && continent ? `<b>${country}</b>, ${continent}`
            : country ? `<b>country</b>`
                : continent ? continent : '';

        const searchUrl = this.createSearchUrl();

        this.#elem.innerHTML = `
            <div class="card__header city__header">
                <h2 class="city__title">
                    ${name}
                </h2>
                <span class="city__name-native">
                    ${name_native ?? ''}
                </span>
            </div>
            <div class="card__content city__content">
                <section class="city__location">
                    ${location}
                    <a class="city__map" href=${searchUrl} target="_blank">
                        <i class="fas fa-map-marker-alt"></i>
                    </a>
                    <div class="hint">
                        <div class="city__coords">
                            ${latitude}, ${longitude}
                        </div>
                        Click to find ${name} in Google Maps
                    </div>
                </section>
                <section class="city__info">
                    <dl>
                        <div class="city__population">
                            <dt>
                                Population:
                            </dt>
                            <dd>
                                ${population ?? ''}
                            </dd>
                        </div>    
                        <div class="city__found">
                            <dt>
                                The foundation date:
                            </dt>
                            <dd>
                                ${founded ?? ''}
                            </dd>
                        </div>
                        <div class="city__landmarks">
                            <dt>Famous landmarks:</dt>
                            <dd>
                                <ul class="city__landmarks-list">
                                    ${landmarks.map(landmark => `<li><i class="fas fa-star"></i><span class="city__landmark-name">${landmark}</span></li>`).join('')}
                                </ul>        
                            </dd>
                        </div>
                    </dl>
                </section>
            </div>
        `;

    }

}