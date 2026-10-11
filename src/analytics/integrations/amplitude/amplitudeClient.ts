import * as amplitude from '@amplitude/analytics-browser';

export async function initAmplitude() {
    const apiKey = process.env.AMPLITUDE_API_KEY || '';

    if (!apiKey) return;

    const autocaptureOptions = {
        attribution: false,
        fileDownloads: false,
        formInteractions: false,
        pageViews: false,
        sessions: false,
        elementInteractions: false,
        networkTracking: false,
        webVitals: false,
        frustrationInteractions: false,
    };

    const options = {
        autocapture: autocaptureOptions,
    };

    amplitude.init(apiKey, options).promise;
}
