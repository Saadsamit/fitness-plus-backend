import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/errors/notFound';
import globalErrorHandler from './app/errors/globalErrorHandler';
import basicRoute from './app/modules/basic';

const app: Application = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://fitness-plus-tau.vercel.app'],
  }),
);
app.use(express.json());

app.use('/', basicRoute);

app.use('/api/v1', router);

app.use(notFound);

// global error handler
app.use(globalErrorHandler);

export default app;
