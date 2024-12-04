import { sendToDataLayer } from './sendToDataLayer';

export function handleDataLayerIntro(
    event: string,
    action: string,
    label: any,
) {
    const mediQuery = window.matchMedia('(max-width: 768px)').matches;

    if (mediQuery) {
        sendToDataLayer(event, action, 'Mobile', label);
    } else {
        sendToDataLayer(event, action, 'Desktop', label);
    }
}
