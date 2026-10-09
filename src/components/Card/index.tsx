import './style.scss';
import { parseDate } from '../../utils/parseDate';
import { cutDescription } from '../../utils/cutDescription';
import { useHandlePopUp } from '../../hooks/useHandlePopUp';
import { memo } from 'react';
import { CircleX } from 'lucide-react';
import { Heart } from '../Icons/Heart';
import { Article } from '../../types/article';
interface CardProps {
    news: Article;
}

const Card: React.FC<CardProps> = ({ news }) => {
    const { isActive, onClosePopUp, onOpenPopUp } = useHandlePopUp(news);

    return !isActive ? (
        <div data-news className="c-card">
            <header className="c-card__header u-header__flex">
                <p data-testid="news-date" className="c-card__date">
                    {parseDate(news.pubDate)}
                </p>
                <Heart news={news} />
            </header>
            <h2
                data-testid="news-title"
                onClick={onOpenPopUp}
                className="c-card__title"
            >
                {news.title}
            </h2>
            <p data-testid="news-description" className="c-card__text">
                {cutDescription(news.description)}
            </p>
        </div>
    ) : (
        <div className="u-wrapper-mask">
            <div className="c-popup">
                <header className="c-popup__header u-header__flex">
                    <p className="c-popup__date">{parseDate(news.pubDate)}</p>
                    <div className="c-popup__close" onClick={onClosePopUp}>
                        <CircleX className="close-btn" />
                    </div>
                </header>
                <h2 className="c-popup__title">{news.title}</h2>

                <p className="c-popup__text">{news.description}</p>
            </div>
        </div>
    );
};

export default memo(Card);
