export class ThemeSwitcher {
    #rootElem;
    #buttonElem; 

    /*
        now themes are stored in an array
        if it is required, to store them in an object,
        should update updateTheme and to use Object.keys(themes) instead of themes
    */

    #themes = [
        'light-theme',
        'dark-theme'
    ];

    constructor() {
        this.#rootElem = document.querySelector('.app-root');
        this.#buttonElem = document.querySelector('.theme-switcher__btn');
    }

    start() {
        // loads theme from localStorage if exists
        this.updateTheme();

        // add theme toggle handler to theme switch button
        const clickHandler = () => this.toggleTheme();
        this.#buttonElem.addEventListener('click', clickHandler);
    }

    getThemesList() {
        return this.#themes;
    }

    getCurrentTheme() {
        const currentTheme = localStorage.getItem('currentTheme');
        if (currentTheme === undefined || !this.ifThemeExists(currentTheme)) {
            return 0; // default value
        }
        return Number(currentTheme);
    }

    setCurrentTheme (key) {
        const themes = this.getThemesList();
        if (themes[key] !== undefined) { 
            localStorage.setItem('currentTheme', key);
        }
    }

    setNextTheme() {
        /* takes next theme from the list
            if the current theme is the last one, then takes the first from the list */
        const newCurrentTheme = (this.getCurrentTheme() + 1) % this.#themes.length;   
        this.setCurrentTheme(newCurrentTheme);
    }

    ifThemeExists(key) {
        const themes = this.getThemesList();
        return themes[key] !== undefined;
    }

    updateTheme() {
        /* applies current theme to root element */
        const currentTheme = this.getCurrentTheme();
        const themes = this.getThemesList();
        themes.forEach((theme, i) => {
            if (i === currentTheme) {
                this.#rootElem.classList.add(theme);               
            } else {
                this.#rootElem.classList.remove(theme);
            }
        });
    }

    toggleTheme() {
        /* button handler 
            counts new current theme and then applies it */
        this.setNextTheme();
        this.updateTheme();
    }
}