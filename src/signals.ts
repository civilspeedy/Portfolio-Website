import { Signal, signal } from '@preact/signals';
import Home from './Pages/Home';
import CareerHistory from './Pages/CareerHistory';

/**
 * Signal for representing theme state. `false` is dark, `true` is light.
 */
export const theme: Signal<boolean> = signal(false);

type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';
const THEME_ATTR = 'data-theme';

const themeFromBool = (): Theme => {
    return theme.value ? 'light' : 'dark';
};

export const toggleTheme = (): void => {
    theme.value = !theme.value;
    const value: Theme = themeFromBool();
    localStorage.setItem(THEME_KEY, value);
    updateCSS();
};

export const getTheme = (): void => {
    const value = localStorage.getItem(THEME_KEY);
    theme.value = value === 'light';
    updateCSS();
};

const updateCSS = (): void => {
    const themeValue = themeFromBool();
    const root = document.documentElement;
    root.setAttribute(THEME_ATTR, themeValue);
    root.classList.remove('dark', 'light');
    root.classList.add(themeValue);
};

export const page = signal(Home());

const pageMap = {
    Home: Home(),
    'Career History': CareerHistory(),
};

export const setPage = (pageName: string): void => {
    page.value = pageMap[pageName];
};
