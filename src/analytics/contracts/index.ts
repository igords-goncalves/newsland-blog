import {
    ArticleViewedEvent,
    ArticleFavoritedEvent,
    ArticleUnfavoritedEvent,
    ArticleSharedEvent,
    ArticleSearchedEvent,
} from './article';
import { PageViewedEvent } from './page';
import { SearchPerformedEvent } from './search';
import { ThemeSwitchedEvent } from './theme';

// Generic contract for all analytics functions that use event
export type AnalyticsEvent =
    | ArticleViewedEvent
    | PageViewedEvent
    | ArticleFavoritedEvent
    | ArticleUnfavoritedEvent
    | ArticleSharedEvent
    | ThemeSwitchedEvent
    | ArticleSearchedEvent
    | SearchPerformedEvent;
