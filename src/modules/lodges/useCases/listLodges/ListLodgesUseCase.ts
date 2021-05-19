import { injectable, inject } from 'tsyringe';

import { TblLoja } from '../../entities/TblLoja';
import { ILodgesRepository } from '../../repositories/ILodgesRepository';

@injectable()
class ListLodgesUseCase {
  constructor(
    @inject('LodgesRepository')
    private lodgesRepository: ILodgesRepository
  ) {}

  async execute(): Promise<TblLoja[]> {
    const lodges = await this.lodgesRepository.list();

    return lodges;
  }
}

export { ListLodgesUseCase };
