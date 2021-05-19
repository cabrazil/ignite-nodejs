import { getRepository, Repository } from 'typeorm';

import { TblAgenda } from '../../entities/TblAgenda';
import {
  IAppointmentsRepository,
  ICreateAppointmentDTO,
} from '../IAppointmentsRepository';

class AppointmentsRepository implements IAppointmentsRepository {
  private repository: Repository<TblAgenda>;
  constructor() {
    this.repository = getRepository(TblAgenda);
  }

  async list(): Promise<TblAgenda[]> {
    const appointments = await this.repository.find();

    return appointments;
  }

  async findByName(nome: string): Promise<TblAgenda> {
    const appointment = await this.repository.findOne({ nome });
    return appointment;
  }

  async findNextSession(): Promise<TblAgenda> {
    const lastSession = await this.repository.query(
      'select nro_sessao from arls.tbl_agenda ta where nro_sessao = (select MAX (nro_sessao) from arls.tbl_agenda ta2)'
    );

    console.log(lastSession);

    return lastSession;
  }

  async create({
    lojaId,
    gestao,
    nome,
    descri,
    dtInicio,
    hrInicio,
    dtFim,
    hrFim,
    recor,
    periodo,
    login,
    grau,
    nroSessao,
  }: ICreateAppointmentDTO): Promise<TblAgenda> {
    const appointment = this.repository.create({
      lojaId,
      gestao,
      nome,
      descri,
      dtInicio,
      hrInicio,
      dtFim,
      hrFim,
      recor,
      periodo,
      login,
      grau,
      nroSessao,
    });

    await this.repository.save(appointment);
    return appointment;
  }
}

export { AppointmentsRepository };
