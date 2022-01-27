export class ThemeSwitcher {
    #rootElem;
    #buttonElem; 
    #themes = [
        'light-theme',
        'dark-theme'
    ];

    constructor() {
        this.#rootElem = document.querySelector('.app-root');
        this.#buttonElem = document.querySelector('.theme-switcher__btn');
        const clickHandler = () => this.toggleTheme();
        this.#buttonElem.addEventListener('click', clickHandler);
    }

    toggleTheme() {
        this.#themes.forEach(theme => {
            this.#rootElem.classList.toggle(theme);
        });
    }
}