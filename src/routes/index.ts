import { Router } from 'express';

import { appointmentsRoutes } from './appointments.routes';
import { categoriesRoutes } from './categories.routes';
import { lodgesRoutes } from './lodges.routes';
import { specificationsRoutes } from './specifications.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/lodges', lodgesRoutes);
router.use('/appointments', appointmentsRoutes);

export { router };
