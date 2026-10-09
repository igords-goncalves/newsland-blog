import * as amplitude from '@amplitude/analytics-browser';
import { AnalyticsEvent } from '../contracts';

function normalizeAmplitudeEventName(eventName: string) {
    return eventName
        .split('_')
        .map(world => world.charAt(0).toUpperCase() + world.slice(1))
        .join(' ');
}

export function sendToAmplitude(event: AnalyticsEvent) {
    const eventName = normalizeAmplitudeEventName(event.event);

    amplitude.track(eventName, event.properties);
}
