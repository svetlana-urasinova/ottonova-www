export class ThemeSwitcher {
    #rootElem;
    #buttonElem; 
    #themes = [
        'light-theme',
        'dark-theme'
    ];

    constructor() {
        this.#rootElem = document.querySelector('.app-root');
        
        // loads theme from localStorage if exists
        this.updateTheme();

        // add theme toggle handler to theme switch button
        this.#buttonElem = document.querySelector('.theme-switcher__btn');
        const clickHandler = () => this.toggleTheme();
        this.#buttonElem.addEventListener('click', clickHandler);
    }

    getCurrentTheme() {
        return Number(localStorage.getItem('currentTheme')) ?? 0;
    }

    setCurrentTheme (value) {
        localStorage.setItem('currentTheme', value);
    }

    updateTheme() {
        const currentTheme = this.getCurrentTheme();
        this.#themes.forEach((theme, i) => {
            if (i === currentTheme) {
                this.#rootElem.classList.add(theme);               
            } else {
                this.#rootElem.classList.remove(theme);
            }
        });
    }

    toggleTheme() {
        const newCurrentTheme = (this.getCurrentTheme() + 1) % this.#themes.length;   
        this.setCurrentTheme(newCurrentTheme);
        this.updateTheme();
    }
}