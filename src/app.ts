import 'reflect-metadata';
// eslint-disable-next-line import-helpers/order-imports
import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import createConnection from './database';
import './shared/container';
import { AppError } from './errors/AppError';
import { router } from './routes';
import swaggerFile from './swagger.json';

createConnection();
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, resquest: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal server error ${err.message}`,
    });
  }
);

export { app };
