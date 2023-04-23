import { useState } from 'react';

import './style.scss';
import favorite from '../../assets/img/favorite-heart.svg';
import favoriteToggled from '../../assets/img/favorite-toggled.svg';

export const Card = (): JSX.Element => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleFavoriteIcon = (): string => {
        setIsFavorite(isFavorite === favorite ? favoriteToggled : favorite);
        return isFavorite;
    };

    // TODO: Provisório
    const date = new Date();
    const currDate = date.getDate();
    const currMonth = date.toLocaleString('pt-BR', { month: 'long' });
    const currYear = date.getFullYear();
    // ============

    return (
        <div className="c-card">
            <header className="c-card__header u-header__flex">
                <p className="c-card__date">{`${currDate} de ${currMonth}, ${currYear}`}</p>
                <img
                    onClick={handleFavoriteIcon}
                    src={isFavorite}
                    alt="Coração"
                    className="c-card__favorite"
                />
            </header>
            <h2 className="c-card__title">Lorem, ipsum dolor sit</h2>
            {/* TODO: Acionar o title como link p/ abrir o modal da noticia */}
            <p className="c-card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                enim sunt incidunt officia, debitis odio reprehenderit sit
                ducimus pariatur quam tempore. Impedit, mollitia suscipit
                tenetur magnam aspernatur nisi quaerat quae.
            </p>
        </div>
    );
};
