export const sendToDataLayer = (
    event: string,
    action: string,
    category: string,
    label: any,
) => {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event,
        action,
        category,
        label,
    });
};
