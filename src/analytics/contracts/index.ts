import {
    ArticleViewedEvent,
    ArticleFavoritedEvent,
    ArticleUnfavoritedEvent,
    ArticleSharedEvent,
    ArticleSearchedEvent,
} from './article';
import { PageViewedEvent } from './page';
import { ThemeSwitchedEvent } from './theme';

export type AnalyticsEvent =
    | ArticleViewedEvent
    | PageViewedEvent
    | ArticleFavoritedEvent
    | ArticleUnfavoritedEvent
    | ArticleSharedEvent
    | ThemeSwitchedEvent
    | ArticleSearchedEvent;
