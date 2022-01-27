import { ThemeSwitcher } from "../classes/ThemeSwitcher.js";
import { localStorageMock } from "./mocks/localStorage.js";

const themeSwitcher = new ThemeSwitcher;

/* theme list:
    0: 'light-theme', 
    1: 'dark-theme'  
*/

it('Should switch dark theme to light one', () => {
    themeSwitcher.setCurrentTheme(0);
    themeSwitcher.setNextTheme();
    const current = themeSwitcher.getCurrentTheme();
    expect(current).toEqual(1);
});

it('Should switch light theme to dark one', () => {
    themeSwitcher.setCurrentTheme(1);
    themeSwitcher.setNextTheme();
    const current = themeSwitcher.getCurrentTheme();
    expect(current).toEqual(0);
});

it('Should correctly update theme directly: theme from list', () => {
    themeSwitcher.setCurrentTheme(0);
    const currentTheme = themeSwitcher.getCurrentTheme();
    expect(currentTheme).toEqual(0);
});

it('Should correctly update theme directly: theme not from list', () => {
    themeSwitcher.setCurrentTheme(1) // in list
    themeSwitcher.setCurrentTheme(5); // not in the list
    const currentTheme = themeSwitcher.getCurrentTheme();
    expect(currentTheme).toEqual(1);
});

it('Should tell if theme exists or not: theme from list', () => {
    const res = themeSwitcher.ifThemeExists(0);
    expect(res).toEqual(true);
});

it('Should tell if theme exists or not: theme not from list', () => {
    const res = themeSwitcher.ifThemeExists(5);
    expect(res).toEqual(false);
})

describe('storage', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock 
        });
    });
    
    it('Get current theme: should return valid theme from localStorage', () => {
        window.localStorage.setItem('currentTheme', 1);
        const currentTheme = themeSwitcher.getCurrentTheme();
        expect(currentTheme).toEqual(1);
    });

    it('Get current theme: should reset invalid theme', () => {
        window.localStorage.setItem('currentTheme', 5);
        const currentTheme = themeSwitcher.getCurrentTheme();
        expect(currentTheme).toEqual(0);
    });

    it('Get current theme: should reset empty theme', () => {
        const currentTheme = themeSwitcher.getCurrentTheme();
        expect(currentTheme).toEqual(0);
    });
});