import './style.scss';
import favorite from '../../assets/img/favorite-heart.svg';
import favoriteToggled from '../../assets/img/favorite-toggled.svg';
import close from '../../assets/img/close.svg';
import { parseDate } from '../../utils/parseDate';
import { cutDescription } from '../../utils/cutDescription';
import { useFavoriteIcon } from '../../hooks/useFavoriteIcon';
import { useHandlePopUp } from '../../hooks/useHandlePopUp';
import { memo } from 'react';

interface CardProps {
    date: string;
    title: string;
    description: string;
    post?: string;
}

const Card: React.FC<CardProps> = ({ date, title, description, post }) => {
    const { isActive, onClosePopUp, onOpenPopUp } = useHandlePopUp(title);
    const { isFavorite, handleFavoriteIcon } = useFavoriteIcon(
        favorite,
        favoriteToggled,
    );
    return (
        <>
            {!isActive ? (
                <div className="c-card">
                    <header className="c-card__header u-header__flex">
                        <p className="c-card__date">{parseDate(date)}</p>
                        <img
                            onClick={handleFavoriteIcon}
                            src={isFavorite}
                            alt="Coração"
                            className="c-card__favorite"
                        />
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
                            <img
                                src={close}
                                alt="Fechar"
                                className="c-popup__close"
                                onClick={onClosePopUp}
                            />
                        </header>
                        <h2 className="c-popup__title">{title}</h2>

                        <p className="c-popup__text">{post}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default memo(Card);
