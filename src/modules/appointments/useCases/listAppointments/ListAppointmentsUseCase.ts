import { inject, injectable } from 'tsyringe';

import { TblAgenda } from '../../entities/TblAgenda';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

@injectable()
class ListAppointmentsUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  async execute(): Promise<TblAgenda[]> {
    const appointments = await this.appointmentsRepository.list();

    return appointments;
  }
}

export { ListAppointmentsUseCase };
