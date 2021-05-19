import { getRepository, Repository } from 'typeorm';

import { TblLoja } from '../../entities/TblLoja';
import { ILodgesRepository } from '../ILodgesRepository';

class LodgesRepository implements ILodgesRepository {
  private repository: Repository<TblLoja>;

  private static INSTANCE: LodgesRepository;

  constructor() {
    this.repository = getRepository(TblLoja);
  }

  async list(): Promise<TblLoja[]> {
    const lodges = await this.repository.find();

    return lodges;
  }

  async findLastSession(lojaId: number): Promise<TblLoja> {
    const lastSession = await this.repository.findOne({ lojaId });

    return lastSession;
  }
}

export { LodgesRepository };
