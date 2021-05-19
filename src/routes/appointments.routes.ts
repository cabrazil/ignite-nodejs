import { Router } from 'express';

import { CreateAppointmentController } from '../modules/appointments/useCases/createAppointment/CreateAppointmentController';
import { ListAppointmentsController } from '../modules/appointments/useCases/listAppointments/ListAppointmentsController';

const appointmentsRoutes = Router();

const listAppointmentsController = new ListAppointmentsController();
const createAppointmentController = new CreateAppointmentController();

appointmentsRoutes.get('/', listAppointmentsController.handle);
appointmentsRoutes.post('/', createAppointmentController.handle);

export { appointmentsRoutes };
