import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.scss';
import './global.reset.scss';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store/configureStore.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </React.StrictMode>,
);
