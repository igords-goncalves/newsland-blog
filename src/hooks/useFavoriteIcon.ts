import { useState } from 'react';
import { handleDataLayerIntro } from '../utils/handleDataLayerIntro';
import * as amplitude from '@amplitude/analytics-browser';
import { sendToAmplitude } from '../analytics/integrations/amplitude';
import { Article } from '../types/article';
import { AnalyticsEvent } from '../analytics/contracts';
import { pushEvent } from '../analytics/dataLayer/dataLayer';

export const useFavoriteIcon = (news: Article) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const event = {
        event: !isFavorite ? 'article_favorited' : 'article_unfavorited',
        properties: {
            article_id: news.article_id,
            article_title: news.title,
        },
    } as AnalyticsEvent;

    const handleFavoriteIcon = (): void => {
        pushEvent(event);
        sendToAmplitude(event);

        !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
    };
    return { isFavorite, handleFavoriteIcon };
};
