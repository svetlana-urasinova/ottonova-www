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
        const themes = this.getThemesList();
        const currentTheme = localStorage.getItem('currentTheme');
        if (currentTheme === undefined || currentTheme === null || !this.ifThemeExists(currentTheme)) {
            return themes[0]; // default value
        }
        return currentTheme;
    }

    setCurrentTheme (theme) {
        if (this.ifThemeExists(theme)) {
            localStorage.setItem('currentTheme', theme);
        }
    }

    setNextTheme() {
        /* takes next theme from the list
            if the current theme is the last one, then takes the first from the list */
        const themes = this.getThemesList();
        const currentTheme = this.getCurrentTheme();
        const currentThemeIndex = themes.findIndex(el => el === currentTheme);
        const newTheme = themes[(currentThemeIndex + 1) % themes.length];
        this.setCurrentTheme(newTheme);
    }

    ifThemeExists(theme) {
        const themes = this.getThemesList();
        return themes.includes(theme);
    }

    updateTheme() {
        /* applies current theme to root element */
        const currentTheme = this.getCurrentTheme();
        const themes = this.getThemesList();
        themes.forEach(theme => {
            if (theme === currentTheme) {
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