import { ThemeSwitcher } from "../classes/ThemeSwitcher.js";
import { localStorageMock } from "./mocks/localStorage.js";

const themeSwitcher = new ThemeSwitcher;

/* theme list:
    'light-theme', 
    'dark-theme'  
*/

it('Should switch dark theme to light one', () => {
    themeSwitcher.setCurrentTheme('light-theme');
    themeSwitcher.setNextTheme();
    const current = themeSwitcher.getCurrentTheme();
    expect(current).toEqual('dark-theme');
});

it('Should switch light theme to dark one', () => {
    themeSwitcher.setCurrentTheme('dark-theme');
    themeSwitcher.setNextTheme();
    const current = themeSwitcher.getCurrentTheme();
    expect(current).toEqual('light-theme');
});

it('Should correctly update theme directly: theme from list', () => {
    themeSwitcher.setCurrentTheme('dark-theme');
    const currentTheme = themeSwitcher.getCurrentTheme();
    expect(currentTheme).toEqual('dark-theme');
});

it('Should correctly update theme directly: theme not from list', () => {
    themeSwitcher.setCurrentTheme('dark-theme') // in list
    themeSwitcher.setCurrentTheme('another-theme'); // not in the list
    const currentTheme = themeSwitcher.getCurrentTheme();
    expect(currentTheme).toEqual('dark-theme');
});

it('Should tell if theme exists or not: theme from list', () => {
    const res = themeSwitcher.ifThemeExists('light-theme');
    expect(res).toEqual(true);
});

it('Should tell if theme exists or not: theme not from list', () => {
    const res = themeSwitcher.ifThemeExists('another-theme');
    expect(res).toEqual(false);
})

describe('storage', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock 
        });
    });
    
    it('Get current theme: should return valid theme from localStorage', () => {
        window.localStorage.setItem('currentTheme', 'dark-theme');
        const currentTheme = themeSwitcher.getCurrentTheme();
        expect(currentTheme).toEqual('dark-theme');
    });

    it('Get current theme: should reset invalid theme', () => {
        window.localStorage.setItem('currentTheme', 'another-theme');
        const currentTheme = themeSwitcher.getCurrentTheme();
        expect(currentTheme).toEqual('light-theme');
    });

    it('Get current theme: should reset empty theme', () => {
        const currentTheme = themeSwitcher.getCurrentTheme();
        expect(currentTheme).toEqual('light-theme');
    });
});