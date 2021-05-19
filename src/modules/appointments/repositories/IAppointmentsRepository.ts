import { TblAgenda } from '../entities/TblAgenda';

interface ICreateAppointmentDTO {
  lojaId: number;
  gestao: number;
  nome?: string;
  descri: string;
  dtInicio?: string;
  hrInicio?: string;
  dtFim?: string;
  hrFim?: string;
  recor?: string;
  periodo?: string;
  login?: string;
  grau: number;
  nroSessao?: number;
}

interface IAppointmentsRepository {
  findByName(name: string): Promise<TblAgenda>;
  list(): Promise<TblAgenda[]>;
  create(data: ICreateAppointmentDTO): Promise<TblAgenda>;
}

export { IAppointmentsRepository, ICreateAppointmentDTO };
