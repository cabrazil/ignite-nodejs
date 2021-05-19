import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAppointmentUseCase } from './CreateAppointmentUseCase';

class CreateAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const createAppointmentUseCase = container.resolve(
      CreateAppointmentUseCase
    );

    const appointment = await createAppointmentUseCase.execute({
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

    return response.status(201).json(appointment);
  }
}

export { CreateAppointmentController };
