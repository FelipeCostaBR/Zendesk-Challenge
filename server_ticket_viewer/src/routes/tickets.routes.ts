import { Router } from 'express';
import TicketsController from '../controllers/TicketsController';

const ticketsRouter = Router();
const ticketsController = new TicketsController();

ticketsRouter.get('/', ticketsController.show);
ticketsRouter.get('/total', ticketsController.total);

export default ticketsRouter;
