import { useState } from 'react';
import { connect } from 'react-redux';
import posts from '../../../core/mock/posts.json';
import './style.scss';

import { Card } from '../../Card';
import { BackTopBtn } from '../../BackTopBtn';
import { useFuse } from '../../../state/hooks/useFuse/useFuse';
import { options } from '../../../state/hooks/useFuse/options.config';

interface Post {
    id: number;
    date: string;
    title: string;
    description?: string;
    post?: string;
}

interface StateProps {
    inputValue: string | any;
}

const Main = ({ inputValue }: StateProps): JSX.Element => {
    const [isSearched, setIsSeacrched] = useState(false);
    const post: Post[] = posts.posts;

    const fuse = useFuse(post, { inputValue, options });
    console.log(fuse);
    // TODO: Renderizar o card se input preenchido senão rederize todos os cards

    return (
        <main className="c-main">
            {!isSearched ? (
                <div className="u-container c-main__container">
                    {post.map(post => (
                        <Card
                            key={post.id}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            post={post.post}
                        />
                    ))}
                </div>
            ) : (
                'vazio'
            )}
            {/* Botão back to top deve desaparecer quando popup aberto */}
            <BackTopBtn />
        </main>
    );
};

const mapStateToProps = (state: any) => {
    return {
        inputValue: state.value.inputValue,
    };
};
export default connect(mapStateToProps)(Main);
