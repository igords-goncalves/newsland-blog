import './style.scss';

export const Header = (): JSX.Element => {
    return (
        <header className="c-header">
            <div className="u-container u-header__container">
                <div className="c-header__text u-header__flex">
                    <h1 className="c-header__logo">Condelândia</h1>
                    <h2 className="c-header__title">blog</h2>
                </div>
                <input
                    type="text"
                    placeholder="Pesquise no blog"
                    className="c-header__input"
                />
            </div>
        </header>
    );
};
