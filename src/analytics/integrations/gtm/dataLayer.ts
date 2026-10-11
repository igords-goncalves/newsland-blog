import { AnalyticsEvent } from '../../contracts/index';

export function pushEvent(event: AnalyticsEvent) {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
}
