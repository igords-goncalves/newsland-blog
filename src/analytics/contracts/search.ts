type SearchEventProperties = {
    search_term?: string;
    results_count?: number;
};

export type SearchPerformedEvent = {
    event: 'search_performed';
    properties: SearchEventProperties;
};
