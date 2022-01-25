export class ThemeSwitcher {
    #rootElem;
    #themes = [
        'light-theme',
        'dark-theme'
    ];

    constructor() {
        this.#rootElem = document.querySelector('.app-root');
    }

    handler() {
        this.#themes.forEach(theme => {
            this.#rootElem.classList.toggle(theme);
        });
    }
}