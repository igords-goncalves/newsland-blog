type ArticleEventProperties = {
    article_id?: string;
    article_title?: string;
    article_category?: string[];
    article_source?: string;
    article_source_url?: string;
    term_searched?: string;
};

export type ArticleViewedEvent = {
    event: 'article_viewed';
    properties: ArticleEventProperties;
};

export type ArticleFavoritedEvent = {
    event: 'article_favorited';
    properties: ArticleEventProperties;
};

export type ArticleUnfavoritedEvent = {
    event: 'article_unfavorited';
    properties: ArticleEventProperties;
};

export type ArticleSearchedEvent = {
    event: 'article_searched';
    properties: ArticleEventProperties;
};

export type ArticleSharedEvent = {
    event: 'article_shared';
    properties: ArticleEventProperties;
};
