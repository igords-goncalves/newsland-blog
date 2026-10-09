// Estrutura agnóstica e arquitetural, não pertence ao GTM
import { AnalyticsEvent } from '../contracts/index';

export function pushEvent(event: AnalyticsEvent) {
    if (typeof window === 'undefined') return;

    if (!event.event) {
        console.warn('[Analytics] Events name is missing');
        return;
    }

    if (!event.properties) {
        console.warn(`[Analytics] Propertie missing for ${event.event}`);
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);

    console.debug('[Analytics] Event pushed', event);
}
