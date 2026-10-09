import { useContext, useEffect } from 'react';
import { Grid } from '../../components/layouts/Grid';
import { Header } from '../../components/templates/Header';
import { Main } from '../../components/templates/Main';
import { ThemeContext } from '../../context/ThemeContext';
import { sendToAmplitude } from '../../analytics/integrations/amplitude';
import { pushEvent } from '../../analytics/dataLayer/dataLayer';
import { AnalyticsEvent } from '../../analytics/contracts';

export function Home() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const event = {
            event: 'page_viewed',
            properties: {
                page_title: document.title,
                page_url: window.location.href,
                page_path: window.location.pathname,
                page_domain: window.location.hostname,
                page_referer: window.location.origin,
            },
        } as AnalyticsEvent;

        pushEvent(event);
        sendToAmplitude(event);
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
