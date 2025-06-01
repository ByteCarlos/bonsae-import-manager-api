import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import routes from './routes/index.js';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { DB } from './connection/db.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
const db = DB.new();
await db.connect();
const server = createServer(app);
// Configuração de CORS
const whitelist = ['http://localhost:3005', 'http://localhost:3333', 'http://localhost:5173', 'https://bonsae-import-manager-web.vercel.app'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('NÃO PERMITIDO PELO CORS'));
        }
    }
};
app.use(cors(corsOptions));
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);
const PORT = Number(process.env.PORT) || 3333;
server.listen(PORT, () => {
    console.log(`O SERVIDOR ESTÁ RODANDO NA PORTA ${PORT}`);
});
//# sourceMappingURL=index.js.map