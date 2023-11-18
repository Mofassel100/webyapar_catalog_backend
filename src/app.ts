import cors from 'cors';
import express, { Application, Router } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
app.use('/api/v1/', router);
// error handles
app.use(globalErrorHandler);

export default app;