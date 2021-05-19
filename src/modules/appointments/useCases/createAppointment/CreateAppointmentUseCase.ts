import { isBefore, parseISO, getDay } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import { ILodgesRepository } from '../../../lodges/repositories/ILodgesRepository';
import { TblAgenda } from '../../entities/TblAgenda';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

interface IRequest {
  lojaId: number;
  gestao: number;
  nome: string;
  descri: string;
  dtInicio: string;
  hrInicio: string;
  dtFim: string;
  hrFim: string;
  recor: string;
  periodo: string;
  login: string;
  grau: number;
  nroSessao: number;
}

@injectable()
class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('LodgesRepository')
    private lodgesRepository: ILodgesRepository
  ) {}

  async execute({
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
  }: IRequest): Promise<TblAgenda> {
    // criar um método findByDate
    const appointmentAlreadyExists = await this.appointmentsRepository.findByName(
      nome
    );

    if (appointmentAlreadyExists) {
      throw new Error('Appointment already exists!');
    }

    const appointmentDate = parseISO(dtInicio);

    if (isBefore(appointmentDate, new Date())) {
      throw new Error('You can not create an appointment on a past date.');
    }

    const lodgeFound = await this.lodgesRepository.findLastSession(lojaId);

    const dayOfWeek = Number(lodgeFound.reuniao);
    const appointmentDay = Number(getDay(appointmentDate));
    if (appointmentDay !== dayOfWeek) {
      throw new Error(
        'You can not create an appointment date that is different of Lodge day.'
      );
    }

    const newSession = lodgeFound.nroUltSessao + 1;

    const appointment = await this.appointmentsRepository.create({
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
      nroSessao: newSession,
    });

    return appointment;
  }
}

export { CreateAppointmentUseCase };
