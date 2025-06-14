import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.scss';
import './global.reset.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />,
);
