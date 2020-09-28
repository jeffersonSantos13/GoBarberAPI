import { Router } from 'express';

import ensureAuthenticared from '@modules/users/infra/http/middlewares/ensureAuthenticared';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticared);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
