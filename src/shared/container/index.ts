import { container } from 'tsyringe';

import { IAppointmentsRepository } from '../../modules/appointments/repositories/IAppointmentsRepository';
import { AppointmentsRepository } from '../../modules/appointments/repositories/implementations/AppointmentsRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { ILodgesRepository } from '../../modules/lodges/repositories/ILodgesRepository';
import { LodgesRepository } from '../../modules/lodges/repositories/implementations/LodgesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);

container.registerSingleton<ILodgesRepository>(
  'LodgesRepository',
  LodgesRepository
);

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);
