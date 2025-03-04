import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import dbConnection from './databases/dbConnection.js';
import {bootstrap} from './src/modules/index.routes.js';
import expressListRoutes from 'express-list-routes';
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
dbConnection();
bootstrap(app);
// expressListRoutes(app)
const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port, host, () => console.log(`Example app listening on http://${host}:${port}!`)); 