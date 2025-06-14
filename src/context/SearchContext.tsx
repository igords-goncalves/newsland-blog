import { createContext } from 'react';

interface SearchContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
    searchTerm: '',
    setSearchTerm: () => {},
});
