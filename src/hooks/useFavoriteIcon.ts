import { useState } from 'react';
import { handleDataLayerIntro } from '../utils/handleDataLayerIntro';
import * as amplitude from '@amplitude/analytics-browser';

export const useFavoriteIcon = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteIcon = (): void => {
        // Tracking by Google Tag Manager
        handleDataLayerIntro(
            'click_link',
            'click',
            isFavorite ? 'removed_favorite' : 'added_favorite',
        );

        // Tracking by Amplitude
        amplitude.track(
            isFavorite
                ? 'News removed from favorites'
                : 'News added to favorites',
            {
                favorited: !isFavorite,
            },
        );

        !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
    };
    return { isFavorite, handleFavoriteIcon };
};
