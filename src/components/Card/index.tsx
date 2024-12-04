import { useState } from 'react';

import './style.scss';
import favorite from '../../assets/img/favorite-heart.svg';
import favoriteToggled from '../../assets/img/favorite-toggled.svg';
import close from '../../assets/img/close.svg';
import { handleDataLayerIntro } from '../../utils/handleDataLayerIntro';

interface DataProps {
    date: string;
    title: string;
    description?: string;
    post?: string;
}

export const Card: React.FC<DataProps> = ({
    date,
    title,
    description,
    post,
}) => {
    const [isFavorite, setIsFavorite] = useState(favorite);
    const [isActive, setIsActive] = useState(false);

    const handleFavoriteIcon = (): string => {
        setIsFavorite(isFavorite === favorite ? favoriteToggled : favorite);
        return isFavorite;
    };

    const onOpenPopUp = () => {
        handleDataLayerIntro('click_link', 'click', title);
        // console.log(window.dataLayer);
        document.body.style.overflow = 'hidden';
        return setIsActive(true);
    };
    const onClosePopUp = () => {
        document.body.style.overflow = 'auto';
        return setIsActive(false);
    };

    const parseDate = (date: string) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

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
                    <p className="c-card__text">{description}</p>
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
