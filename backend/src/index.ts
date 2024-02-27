import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';

require('dotenv').config();

const app = express();

app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(PORT + ' 번 포트에서 대기 중'); // Lo tiró copilot, se ve bien, así que se queda
})

const mongoUrl = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(mongoUrl);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

