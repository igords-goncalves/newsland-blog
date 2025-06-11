import Fuse from 'fuse.js';

interface FuseTypes {
    inputValue: string | any;
    options: object;
}

export const options = {
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

export const useFuse = (
    data: object | any,
    { inputValue, options }: FuseTypes,
) => {
    const fuse = new Fuse<unknown>(data, options).search(inputValue);
    return fuse;
};
