import { useState } from 'react';

import './style.scss';
import favorite from '../../assets/img/favorite-heart.svg';
import favoriteToggled from '../../assets/img/favorite-toggled.svg';
import close from '../../assets/img/close.svg';

export const Card = (): JSX.Element => {
    const [isFavorite, setIsFavorite] = useState(favorite);
    const [isActive, setIsActive] = useState(true);

    const handleFavoriteIcon = (): string => {
        setIsFavorite(isFavorite === favorite ? favoriteToggled : favorite);
        return isFavorite;
    };

    const onOpenPopUp = () => setIsActive(false);
    const onClosePopUp = () => setIsActive(true);

    // TODO: Provisório
    const date = new Date();
    const currDate = date.getDate();
    const currMonth = date.toLocaleString('pt-BR', { month: 'long' });
    const currYear = date.getFullYear();
    // ============

    return (
        <>
            {isActive ? (
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
                    <h2 onClick={onOpenPopUp} className="c-card__title">
                        Lorem, ipsum dolor sit
                    </h2>
                    <p className="c-card__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae enim sunt incidunt officia, debitis odio
                        reprehenderit sit ducimus pariatur quam tempore.
                        Impedit, mollitia suscipit tenetur magnam aspernatur
                        nisi quaerat quae.
                    </p>
                </div>
            ) : (
                // TODO: Modal precisa abrir sempre ao meio da tela mesmo quando o elemento clicado for o mais abaixo da tela
                // TODO: O overflow da tela de baixo precisa sumir e s;o retornar após o modal fechar
                <div className="u-wrapper-mask">
                    <div className="c-popup">
                        <header className="c-popup__header u-header__flex">
                            <p className="c-popup__date">{`${currDate} de ${currMonth}, ${currYear}`}</p>
                            <img
                                src={close}
                                alt="Fechar"
                                className="c-popup__close"
                                onClick={onClosePopUp}
                            />
                        </header>
                        <h2 className="c-popup__title">
                            Lorem, ipsum dolor sit
                        </h2>
                        {/* TODO: Acionar o title como link p/ abrir o modal da noticia */}
                        <p className="c-popup__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae enim sunt incidunt officia, debitis odio
                            reprehenderit sit ducimus pariatur quam tempore.
                            Impedit, mollitia suscipit tenetur magnam aspernatur
                            nisi quaerat quae. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Facilis, saepe dolore
                            iure iste blanditiis, expedita nihil sapiente earum
                            repellat doloribus voluptatibus dolor, in distinctio
                            eos itaque praesentium reprehenderit similique quam.
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur quam mollitia ut dolore laboriosam ad,
                            explicabo dolorum. Dignissimos molestias facilis
                            perspiciatis. Voluptates, atque minima! Aliquid
                            aperiam voluptates quibusdam magnam laboriosam!
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odit perspiciatis deleniti explicabo porro
                            architecto maxime vel, rem voluptates ipsum, dicta
                            culpa repudiandae deserunt maiores alias libero
                            veritatis temporibus magnam aspernatur. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Vitae
                            enim sunt incidunt officia, debitis odio
                            reprehenderit sit ducimus pariatur quam tempore.
                            Impedit, mollitia suscipit tenetur magnam aspernatur
                            nisi quaerat quae. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Facilis, saepe dolore
                            iure iste blanditiis, expedita nihil sapiente earum
                            repellat doloribus voluptatibus dolor, in distinctio
                            eos itaque praesentium reprehenderit similique quam.
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur quam mollitia ut dolore laboriosam ad,
                            explicabo dolorum. Dignissimos molestias facilis
                            perspiciatis. Voluptates, atque minima! Aliquid
                            aperiam voluptates quibusdam magnam laboriosam!
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odit perspiciatis deleniti explicabo porro
                            architecto maxime vel, rem voluptates ipsum, dicta
                            culpa repudiandae deserunt maiores alias libero
                            veritatis temporibus magnam aspernatur.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
