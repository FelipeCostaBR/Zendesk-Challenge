import { Router } from 'express';
import usersRouter from './users.routes';
import ticketsRouter from './tickets.routes';

const routes = Router();

routes.use('/tickets', ticketsRouter);
routes.use('/users', usersRouter);

export default routes;
