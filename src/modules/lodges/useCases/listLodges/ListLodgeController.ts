import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListLodgesUseCase } from './ListLodgesUseCase';

class ListLodgeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLodgesUseCase = container.resolve(ListLodgesUseCase);
    const all = await listLodgesUseCase.execute();

    return response.json(all);
  }
}

export { ListLodgeController };
