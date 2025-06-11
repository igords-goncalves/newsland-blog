import { useState } from 'react';

export const useFavoriteIcon = (favorite: any, favoriteToggled: any) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleFavoriteIcon = (): string => {
        setIsFavorite(isFavorite === favorite ? favoriteToggled : favorite);
        return isFavorite;
    };

    return { isFavorite, handleFavoriteIcon };
};
