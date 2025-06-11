import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import posts from '../../../database/posts.json';
import * as motion from 'motion/react-client';
import './style.scss';

import { Card } from '../../Card';
import { BackTopBtn } from '../../BackTopBtn';
import { options, useFuse } from '../../../hooks/useFuse';
import NewsDataService from '../../../services/NewsDataService';
import { News } from '../../../types/news';
import { Article } from '../../../types/article';

interface Post {
    id: number;
    date: string;
    title: string;
    description?: string;
    post?: string;
}

interface StateProps {
    inputValue: string;
}

const Main = ({ inputValue }: StateProps): JSX.Element => {
    const [meta, setMeta] = useState<News>();
    const [news, setNews] = useState<Article[]>([]);

    const post: Post[] = posts.posts;
    const [isFiltered, setIsFiltered] = useState<Post[] | any>(post);

    useEffect(() => {
        const fetchNews = async () => {
            const newsService = new NewsDataService();
            const response = await newsService.getLatestNews();
            const data = response.data;
            const news = data.results;
            setMeta(data);
            setNews(news);
        };
        fetchNews();
    }, []);

    console.log(news);

    const fuse = useFuse(news, { inputValue, options });

    useEffect(() => {
        setIsFiltered(
            fuse.length > 0 ? fuse.map(results => results.item) : news,
        );
    }, [inputValue]);

    return (
        <main className="c-main">
            <div key={isFiltered} className="u-container c-main__container">
                {isFiltered.length === 0 ? (
                    <p className="c-main_error">
                        Desculpe! Nenhuma notícia encontrada.
                    </p>
                ) : (
                    isFiltered.map((news: Article) => (
                        <motion.div
                            key={news.article_id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <Card
                                date={news.pubDate}
                                title={news.title}
                                description={
                                    news.description ||
                                    'Sem descrição disponível'
                                }
                                post={news.content}
                            />
                        </motion.div>
                    ))
                )}
            </div>
            <BackTopBtn />
        </main>
    );
};

const mapStateToProps = (state: any) => {
    return {
        inputValue: state.value.inputValue,
    };
};
export default connect(mapStateToProps)(Main);
