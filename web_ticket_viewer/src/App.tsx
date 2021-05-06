import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';
import Routes from './routes';

import GlobalStyle from './styles/global';

Modal.setAppElement('#root');

export const App: React.FC = () => (
    <div className="App">
        <Router>
            <Routes />
        </Router>
        <GlobalStyle />
    </div>
);
