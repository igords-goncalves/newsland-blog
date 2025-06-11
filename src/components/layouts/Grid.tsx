import './style.scss';

export interface GridProps {
    direction?: 'grid-template-row' | null;
    justify?: 'center' | null;
    children?: React.ReactNode;
}

export const Grid = (props: GridProps) => {
    return <div className="l-grid">{props.children}</div>;
};
