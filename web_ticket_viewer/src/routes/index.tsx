import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppError from '../components/Error';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
    <>
        <Switch>
            <Route path="/tickets" exact component={Dashboard} />
            <Route component={AppError} />
        </Switch>
    </>
);

export default Routes;
