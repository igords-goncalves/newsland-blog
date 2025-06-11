import { Article } from './article';

export type News = {
    status: string;
    totalResults: number;
    results: Article[];
    nextPage: number;
};
