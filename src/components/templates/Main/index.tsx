import { Card } from '../../Card';
import posts from '../../../core/mock/posts.json';
import './style.scss';
import { BackTopBtn } from '../../BackTopBtn';

interface Post {
    id: number;
    date: string;
    title: string;
    description?: string;
    post?: string;
}

export const Main = (): JSX.Element => {
    const post: Post[] = posts.posts;

    return (
        <main className="c-main">
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
            {/* Botão back to top deve desaparecer quando popup aberto */}
            <BackTopBtn />
        </main>
    );
};
