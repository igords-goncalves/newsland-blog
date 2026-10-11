import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { track } from '../analytics/core/track';
import { ThemeSwitchedEvent } from '../analytics/contracts/theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() =>
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
    );

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        const event: ThemeSwitchedEvent = {
            event: 'theme_switched',
            properties: {
                theme: newTheme,
            },
        };

        track(event);

        //? Qual foi o propósito de adicionar essa função global? Para que ela é usada? --- IGNORE ---
        if (typeof window !== 'undefined' && window.updateTheme) {
            window.updateTheme(newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
