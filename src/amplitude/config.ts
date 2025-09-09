import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_KEY = process.env.AMPLITUDE_API_KEY || '';

amplitude.init(AMPLITUDE_KEY, {
    autocapture: {
        attribution: true,
        fileDownloads: true,
        formInteractions: true,
        pageViews: true,
        sessions: true,
        elementInteractions: true,
        networkTracking: true,
        webVitals: true,
        frustrationInteractions: true,
    },
});

amplitude.track('Iniciado');
