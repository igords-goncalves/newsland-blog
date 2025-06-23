import './style.scss';
import { parseDate } from '../../utils/parseDate';
import { cutDescription } from '../../utils/cutDescription';
import { useHandlePopUp } from '../../hooks/useHandlePopUp';
import { memo } from 'react';
import { CircleX } from 'lucide-react';
import { Heart } from '../Icons/Heart';

interface CardProps {
    date: string;
    title: string;
    description: string;
    post?: string;
}

const Card: React.FC<CardProps> = ({ date, title, description /*post*/ }) => {
    const { isActive, onClosePopUp, onOpenPopUp } = useHandlePopUp(title);

    return (
        <>
            {!isActive ? (
                <div className="c-card">
                    <header className="c-card__header u-header__flex">
                        <p className="c-card__date">{parseDate(date)}</p>
                        {/* <img
                            onClick={handleFavoriteIcon}
                            src={isFavorite}
                            alt="Coração"
                            className="c-card__favorite"
                        /> */}
                        <Heart />
                    </header>
                    <h2 onClick={onOpenPopUp} className="c-card__title">
                        {title}
                    </h2>
                    <p className="c-card__text">
                        {cutDescription(description)}
                    </p>
                </div>
            ) : (
                <div className="u-wrapper-mask">
                    <div className="c-popup">
                        <header className="c-popup__header u-header__flex">
                            <p className="c-popup__date">{parseDate(date)}</p>
                            <div
                                className="c-popup__close"
                                onClick={onClosePopUp}
                            >
                                <CircleX className="close-btn" />
                            </div>
                        </header>
                        <h2 className="c-popup__title">{title}</h2>

                        <p className="c-popup__text">{description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default memo(Card);
