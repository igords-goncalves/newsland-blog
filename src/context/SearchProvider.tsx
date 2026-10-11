import { useEffect, useState } from 'react';

import { SearchContext } from './SearchContext';
import { sendToAmplitude } from '../analytics/integrations/amplitude/amplitudeAdapter';
import { pushEvent } from '../analytics/integrations/gtm/dataLayer';
import { SearchPerformedEvent } from '../analytics/contracts/search';

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (!searchTerm.trim()) {
            return;
        }

        const event: SearchPerformedEvent = {
            event: 'search_performed',
            properties: {
                search_term: searchTerm,
                results_count: 0,
            },
        };

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
