import React, { useEffect } from 'react';
import { markAmplitudeReady } from '../analytics/core/track.js';
import { initAmplitude } from '../analytics/integrations/amplitude/amplitudeClient.js';

interface AmplitudeProviderProps {
    children: React.ReactNode;
}

export function AmplitudeProvider({ children }: AmplitudeProviderProps) {
    useEffect(() => {
        let active = true;

        async function initialize() {
            try {
                await initAmplitude();

                if (active) {
                    markAmplitudeReady();
                }
            } catch (error) {
                console.error('Error initializing Amplitude:', error);
            }
        }

        void initialize();

        return () => {
            active = false;
        };
    }, []);

    return <>{children}</>;
}
