import { Card } from '../../Card';
import './style.scss';

export const Main = (): JSX.Element => {
    return (
        <main className="c-main">
            <div className="u-container c-main__container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    );
};
