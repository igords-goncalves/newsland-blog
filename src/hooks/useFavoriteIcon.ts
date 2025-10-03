import { useState } from 'react';

export const useFavoriteIcon = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteIcon = (): void => {
        !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
    };

    return { isFavorite, handleFavoriteIcon };
};
