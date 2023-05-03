import { useReducer } from 'react';
import { initialState } from '../../../state/constants/redux/initialState';
import { reducer } from '../../../state/constants/redux/reducer';
import logo from '../../../assets/img/logo.svg';
import './style.scss';
import { handleChange } from '../../../state/constants/redux/actions/handlesChange';

export const Header = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // TODO: O state deve ir para o contexto ou ser acessado pelo component Card
    // TODO: Exportar a ation também

    console.log(state);

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
                    onChange={e => handleChange(e, dispatch)}
                    className="c-header__input"
                />
            </div>
        </header>
    );
};
