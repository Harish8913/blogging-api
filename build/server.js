import express from 'express';
import config from './config/config.js';
import { postUser } from './controllers/register.controller.js';
const app = express();
app.use(express.urlencoded());
app.use(express.json());
// app.use('/', authCheck , authController) 
app.post('/api-register', postUser);
app.listen(config.port, () => {
    console.log(`Server is running on PORT: ${config.port}, MODE: ${config.nodeEnv}`);
});
