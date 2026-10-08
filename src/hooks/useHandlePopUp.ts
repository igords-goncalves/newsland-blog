import { useState } from 'react';
import { handleDataLayerIntro } from '../utils/handleDataLayerIntro';
import * as amplitude from '@amplitude/analytics-browser';
import { Article } from '../types/article';

amplitude.init(process.env.AMPLITUDE_API_KEY || '');

export const useHandlePopUp = (news: Article) => {
    const [isActive, setIsActive] = useState(false);

    const onOpenPopUp = () => {
        document.body.style.overflow = 'hidden';

        // Tracking by Google` Tag Manager
        handleDataLayerIntro('click_link', 'click', news.title);

        // Tracking by Amplitude
        amplitude.track('News opened', {
            pubDate: news.pubDate,
            country: news.country,
            category: news.category,
            creator: news.creator || 'Unknown creator',
        });

        return setIsActive(true);
    };

    const onClosePopUp = () => {
        document.body.style.overflow = 'auto';
        return setIsActive(false);
    };

    return {
        isActive,
        onOpenPopUp,
        onClosePopUp,
    };
};
