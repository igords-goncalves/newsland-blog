import * as motion from 'motion/react-client';
import backTopBtn from '../../assets/img/back-top-btn.svg';
import './style.scss';

export const BackTopBtn = (): JSX.Element => {
    return (
        <button
            className="c-btn"
            onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
        >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img
                    className="c-btn__icon"
                    src={backTopBtn}
                    alt="Voltar ao tôpo"
                />
            </motion.div>
        </button>
    );
};
