import { useEffect, useState } from 'react';
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
    inputValue: string;
}

const Main = ({ inputValue }: StateProps): JSX.Element => {
    const post: Post[] = posts.posts;
    const [isFiltered, setIsFiltered] = useState<Post[] | any>(post);

    const fuse = useFuse(post, { inputValue, options });
    // TODO: Renderizar o card se input preenchido senão rederize todos os cards

    useEffect(() => {
        setIsFiltered(
            fuse.length > 0 ? fuse.map(results => results.item) : post,
        );
    }, [inputValue]);

    return (
        <main className="c-main">
            <div className="u-container c-main__container">
                {isFiltered.map((post: Post) => (
                    <Card
                        key={post.id}
                        date={post.date}
                        title={post.title}
                        description={post.description}
                        post={post.post}
                    />
                ))}
            </div>
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
