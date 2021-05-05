import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

export const App: React.FC = () => (
    <div className="App">
        <Router>
            <Routes />
        </Router>
        <GlobalStyle />
    </div>
);
