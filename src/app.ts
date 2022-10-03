import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { debug } from 'debug';



const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
//const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = { transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all: true})
    ),
}

if(!process.env.DEBUG){
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

//routes.push(new ClientsRoutes(app));

