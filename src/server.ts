import express from 'express';
import { Request, Response } from 'express';
import { authController } from './controllers/auth.controller';
import { authCheck } from './middlewares/auth.middlware';
import config from './config/config';

const app = express();

app.use('/', authCheck , authController)

app.listen(config.port, () => {
    console.log(`Server is running on PORT: ${config.port}, MODE: ${config.nodeEnv}`)
}) 