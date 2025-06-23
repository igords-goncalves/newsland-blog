import logo from '../../../assets/img/logo.svg';
import lightMode from '../../../assets/img/light-mode.svg';
import darktMode from '../../../assets/img/dark-mode.svg';

import './style.scss';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { ThemeContext } from '../../../context/ThemeContext';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export const Header = (): JSX.Element => {
    const { setSearchTerm } = useContext(SearchContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className="c-header">
            <div className="u-container u-header__container">
                <div className="c-header__text">
                    <img className="c-header__brand" src={logo} alt="" />
                    <h1 className="c-header__logo">Newsland blog</h1>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <div className="c-header__light" onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <Moon className="moon" />
                            ) : (
                                <Sun className="sun" />
                            )}
                        </div>
                    </motion.div>
                </div>
                <input
                    type="text"
                    placeholder="Pesquise no blog"
                    onChange={e => setSearchTerm(e.target.value)}
                    id="icon"
                    className="c-header__input"
                />
            </div>
        </header>
    );
};
