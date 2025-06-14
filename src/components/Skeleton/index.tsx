import { memo } from 'react';
import './style.scss';

const Skeleton: React.FC = () => {
    return <div className="skeleton"></div>;
};

export default memo(Skeleton);
