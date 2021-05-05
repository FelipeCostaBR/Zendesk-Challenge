import { Router } from 'express';
import UsersController from '../controllers/usersController';

const usersRouter = Router();
const userController = new UsersController();
usersRouter.get('/:id', userController.show);

export default usersRouter;
