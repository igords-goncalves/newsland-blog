import { useEffect, useState } from 'react';
import NewsDataService from '../services/NewsDataService';
import { Article } from '../types/article';
import { News } from '../types/news';

export const useFetchNews = () => {
    const [meta, setMeta] = useState<News>();

    const [news, setNews] = useState<Article[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                const newsService = new NewsDataService();
                const response = await newsService.getLatestNews();
                const data = await response.data;
                const news = await data.results;

                setMeta(data);
                setNews(news);
                setIsloading(false);
            } catch (error) {
                setIsError(true);
            }
        })();
    }, []);

    return {
        news,
        meta,
        isLoading,
        isError,
    };
};
