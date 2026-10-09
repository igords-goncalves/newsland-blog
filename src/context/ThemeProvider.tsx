import { ReactNode, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { sendToAmplitude } from '../analytics/integrations/amplitude';
import { AnalyticsEvent } from '../analytics/contracts';
import { pushEvent } from '../analytics/dataLayer/dataLayer';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<any>(localStorage.getItem('theme'));

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        const event = {
            event: 'theme_switched',
            properties: {
                theme: newTheme,
            },
        } as AnalyticsEvent;

        sendToAmplitude(event);
        pushEvent(event);

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
