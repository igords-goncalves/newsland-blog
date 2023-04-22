import './style.scss';
import favorite from '../../assets/img/favorite-heart.svg';

export const Card = (): JSX.Element => {
    return (
        <div className="c-card">
            <header className="c-card__header u-header__flex">
                <p className="c-card__date">{Date.now()}</p>
                <img src={favorite} alt="" className="c-card__favorite" />
                {/* TODO: Adiconar onClick a imagem vpara mudar a cor do icione */}
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
