import { useContext, useEffect } from 'react';
import { Grid } from '../../components/layouts/Grid';
import { Header } from '../../components/templates/Header';
import { Main } from '../../components/templates/Main';
import { ThemeContext } from '../../context/ThemeContext';
import { track } from '../../analytics/core/track';
import { PageViewedEvent } from '../../analytics/contracts/page';

export function Home() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        // Event bulit in agree with the component necessities and following a minimal contract
        const event: PageViewedEvent = {
            event: 'page_viewed',
            properties: {
                page_title: document.title,
                page_url: window.location.href,
                page_path: window.location.pathname,
                page_domain: window.location.hostname,
                page_referer: document.referrer,
            },
        };

        track(event);
    }, []);

    return (
        <div className={theme === 'light' ? 'theme--light' : 'theme--dark'}>
            <Grid>
                <Header />
                <Main />
            </Grid>
        </div>
    );
}
