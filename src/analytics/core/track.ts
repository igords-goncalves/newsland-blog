import { AnalyticsEvent } from '../contracts';
import { pushEvent } from '../integrations/gtm/dataLayer';
import { sendToAmplitude } from '../integrations/amplitude/amplitudeAdapter';

import { drainQueue, enqueue } from './eventQueue';

let isAmplitudeReady = false;

export function track(event: AnalyticsEvent) {
    pushEvent(event);

    if (!isAmplitudeReady) {
        enqueue(event);
        return;
    }
    sendToAmplitude(event);
}

// Import not call push event again, because it is already called in track function
export function markAmplitudeReady() {
    isAmplitudeReady = true;

    const pendingEvents = drainQueue();

    for (const event of pendingEvents) {
        sendToAmplitude(event);
    }
}
