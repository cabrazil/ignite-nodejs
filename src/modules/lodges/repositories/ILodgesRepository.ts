import { TblLoja } from '../entities/TblLoja';

interface ILodgesRepository {
  list(): Promise<TblLoja[]>;
  findLastSession(lojaId: number): Promise<TblLoja>;
}

export { ILodgesRepository };
