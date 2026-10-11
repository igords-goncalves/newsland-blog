import { useState } from 'react';
import { Article } from '../types/article';
import { sendToAmplitude } from '../analytics/integrations/amplitude/amplitudeAdapter';
import { pushEvent } from '../analytics/integrations/gtm/dataLayer';
import { ArticleViewedEvent } from '../analytics/contracts/article';

export const useHandlePopUp = (news: Article) => {
    const [isActive, setIsActive] = useState(false);

    const onOpenPopUp = () => {
        document.body.style.overflow = 'hidden';

        const event: ArticleViewedEvent = {
            event: 'article_viewed',
            properties: {
                article_title: news.title,
                article_id: news.article_id,
                article_category: news.category,
                article_source: news.source_name,
                article_source_url: news.source_url,
            },
        };

        pushEvent(event);
        sendToAmplitude(event);

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
