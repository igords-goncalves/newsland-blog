import { connect } from 'react-redux';

import logo from '../../../assets/img/logo.svg';
import './style.scss';
import { getInputValue } from '../../../redux/actions/inputValue';

interface propsInputValue {
    inputValue: any;
}

const Header = ({ inputValue }: propsInputValue): JSX.Element => {
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
                    onChange={e => inputValue(e.target.value)}
                    id="icon"
                    className="c-header__input"
                />
            </div>
        </header>
    );
};

const mapStateToProps = (state: any) => {
    return {
        inputValue: state.value.inputValue,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        inputValue(value: string) {
            const action = getInputValue(value);
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
