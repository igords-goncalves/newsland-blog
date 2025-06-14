import { useEffect, useState } from 'react';
import { Article } from '../types/article';
import Fuse from 'fuse.js';

export const useFuse = (searchTerm: string, news: Article[]) => {
    const [isFiltered, setIsFiltered] = useState<Article[]>(news);

    const options = {
        isCaseSensitive: false,
        includeScore: true,
        shouldSort: true,
        includeMatches: false,
        minMatchCharLength: 2,
        location: 0,
        threshold: 0.6,
        distance: 100,
        useExtendedSearch: true,
        ignoreLocation: false,
        ignoreFieldNorm: false,
        fieldNormWeight: 1,
        keys: ['title', 'date', 'description', 'post'],
    };

    const fuse = new Fuse<unknown>(news, options).search(searchTerm);

    useEffect(() => {
        if (searchTerm) {
            setIsFiltered(
                fuse.length > 0 ? fuse.map((results: any) => results.item) : [],
            );
        } else {
            setIsFiltered(news);
        }
    }, [searchTerm, news]);

    return {
        isFiltered,
    };
};
