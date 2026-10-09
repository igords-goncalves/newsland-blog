import { createContext } from 'react';

interface ThemeContextType {
    theme: string | null;
    setTheme: (theme: string) => void;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {},
    toggleTheme: () => {},
});
