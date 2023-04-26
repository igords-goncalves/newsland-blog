import './style.scss';
import logo from '../../../assets/img/logo.svg';

export const Header = (): JSX.Element => {
    return (
        <header className="c-header">
            <div className="u-container u-header__container">
                <div className="c-header__text u-header__flex">
                    <img src={logo} alt="" />
                    <h1 className="c-header__logo">Newsland</h1>
                </div>
                <input
                    type="text"
                    placeholder="Pesquise no blog"
                    id="icon"
                    className="c-header__input"
                />
            </div>
        </header>
    );
};
