import { connect } from 'react-redux';
import * as motion from 'motion/react-client';
import './style.scss';

import Card from '../../Card';
import BackTopBtn from '../../BackTopBtn';
import { Article } from '../../../types/article';
import { useFuse } from '../../../hooks/useFuse';
import { useFetchNews } from '../../../hooks/useFetchNews';
import Skeleton from '../../Skeleton';
import React from 'react';

interface StateProps {
    inputValue: string;
}

const Main = ({ inputValue }: StateProps): JSX.Element => {
    const { news, isLoading, isError } = useFetchNews();
    const { isFiltered } = useFuse(inputValue, news);

    if (isError) {
        return (
            <p className="c-main_error">
                Desculpe! Nenhuma notícia encontrada.
            </p>
        );
    }

    if (isLoading) {
        return (
            <div className="u-container c-main__container">
                {Array(5)
                    .fill(0)
                    .map((_, id) => (
                        <React.Fragment key={id}>
                            <Skeleton />
                        </React.Fragment>
                    ))}
            </div>
        );
    }

    return (
        <main className="c-main">
            <div className="u-container c-main__container">
                {isFiltered.map((news: Article) => (
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
                                news.description || 'Sem descrição disponível'
                            }
                            post={news.content}
                        />
                    </motion.div>
                ))}
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
