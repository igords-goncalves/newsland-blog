import * as motion from 'motion/react-client';
import { ArrowBigUpDash } from 'lucide-react';
import './style.scss';
import { memo } from 'react';

const BackTopBtn = (): JSX.Element => {
    return (
        <button
            className="c-btn"
            onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
        >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <div className="c-btn__icon">
                    <ArrowBigUpDash className="top" />
                </div>
            </motion.div>
        </button>
    );
};

export default memo(BackTopBtn);
