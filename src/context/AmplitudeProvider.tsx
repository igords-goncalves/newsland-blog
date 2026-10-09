import React, { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

interface AmplitudeProviderProps {
    children: React.ReactNode;
}

export function AmplitudeProvider({ children }: AmplitudeProviderProps) {
    const apiKey = process.env.AMPLITUDE_API_KEY || '';

    useEffect(() => {
        if (!apiKey) return;

        amplitude.init(apiKey, {
            autocapture: {
                attribution: false,
                fileDownloads: false,
                formInteractions: false,
                pageViews: false,
                sessions: false,
                elementInteractions: false,
                networkTracking: false,
                webVitals: false,
                frustrationInteractions: false,
            },
        });
    }, [apiKey]);

    return <>{children}</>;
}
