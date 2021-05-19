import { Router } from 'express';

import { ListLodgeController } from '../modules/lodges/useCases/listLodges/ListLodgeController';

const lodgesRoutes = Router();

const listLodgeController = new ListLodgeController();

lodgesRoutes.get('/', listLodgeController.handle);

export { lodgesRoutes };
