import '../../../global.scss';

export interface GridProps {
    direction?: 'row' | 'column';
    justfy?: 'start' | 'end';
    children?: React.ReactNode;
}

export const Grid = (props: GridProps) => {
    return <div className="grid">{props.children}</div>;
};
