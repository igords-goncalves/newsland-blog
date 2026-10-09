type PageViewedProperties = {
    page_title: string;
    page_url: string;
    page_domain: string;
    page_path: string;
    page_referer: string;
};

export type PageViewedEvent = {
    event: 'page_viewed';
    properties: PageViewedProperties;
};
