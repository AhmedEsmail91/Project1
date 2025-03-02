import express from 'express'
import dbConnection from './databases/dbConnection.js';
import {bootstrap} from './modules/index.routes.js';
const app = express();
app.use(express.json());
dbConnection();
bootstrap(app);

const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port, host, () => console.log(`Example app listening on http://${host}:${port}!`));