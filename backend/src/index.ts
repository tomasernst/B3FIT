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
    console.log(PORT + ' 번 포트에서 대기 중'); // Lo tiró copilot, se ve bien en coreano, así que se queda
})

const mongoUrl = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(mongoUrl);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

// Handle home route

app.get('/', (req, res) => {
    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>B3FIT API</title>
            <style>
                /* CSS styles */
                body {
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }

                .welcome-message {
                    font-size: 36px;
                    color: #FF5722; /* Orange color */
                    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
                    animation: glow 1s ease-in-out infinite alternate;
                }

                @keyframes glow {
                    from {
                        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
                    }
                    to {
                        text-shadow: 0px 0px 10px #FF5722, 0px 0px 20px #FF5722, 0px 0px 30px #FF5722;
                    }
                }
            </style>
        </head>
        <body>
            <div class="welcome-message">欢迎访问 B3FIT API</div>
        </body>
        </html>
    `;
    res.send(htmlResponse);
});

