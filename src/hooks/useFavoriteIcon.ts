import { useState } from 'react';
import { sendToAmplitude } from '../analytics/integrations/amplitude/amplitudeAdapter';
import { Article } from '../types/article';
import { pushEvent } from '../analytics/integrations/gtm/dataLayer';
import {
    ArticleFavoritedEvent,
    ArticleUnfavoritedEvent,
} from '../analytics/contracts/article';

export const useFavoriteIcon = (news: Article) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const event: ArticleFavoritedEvent | ArticleUnfavoritedEvent = {
        event: !isFavorite ? 'article_favorited' : 'article_unfavorited',
        properties: {
            article_id: news.article_id,
            article_title: news.title,
        },
    };

    const handleFavoriteIcon = (): void => {
        pushEvent(event);
        sendToAmplitude(event);

        !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
    };
    return { isFavorite, handleFavoriteIcon };
};
