import { Application } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import { DayRoutes } from './routes/day';
// TODO use .env
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/${env}`);

class App {
  public app: Application;
  public dayRoutes: DayRoutes = new DayRoutes();
  public mongoUrl: string = config.dbUrl;

  constructor() {
    this.app = express();
    this.config();
    this.dayRoutes.routes(this.app);
    this.setup();
  }

  private config(): void {
    // allow Cross-Origin
    const corsOpts = {
      origin: '*',

      methods: ['GET', 'POST', 'DELETE', 'PATCH'],

      allowedHeaders: ['Content-Type'],
    };
    this.app.use(cors(corsOpts));
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private setup(): void {
    (mongoose as any).Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().app;
