import { useEffect, useState } from 'react';

import { SearchContext } from './SearchContext';
import { sendToAmplitude } from '../analytics/integrations/amplitude';
import { AnalyticsEvent } from '../analytics/contracts';
import { pushEvent } from '../analytics/dataLayer/dataLayer';

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (!searchTerm.trim()) {
            return;
        }

        const event = {
            event: 'article_searched',
            properties: {
                term_searched: searchTerm,
            },
        } as AnalyticsEvent;

        const timeout = setTimeout(() => {
            sendToAmplitude(event);
            pushEvent(event);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [searchTerm]);

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};
