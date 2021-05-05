import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import Ticket from '../pages/Ticket';

const Routes: React.FC = () => (
    <>
        <Switch>
            <Route path="/tickets" exact component={Dashboard} />
            <Route path="/tickets/:id" exact component={Ticket} />
        </Switch>
    </>
);

export default Routes;
