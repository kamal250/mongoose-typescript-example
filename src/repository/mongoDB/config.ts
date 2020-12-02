import { connect } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export class MongoDB {
    MONGODB_USER: string;
    MONGODB_PASSWORD: string;
    MONGODB_HOST: string;
    MONGODB_PORT: string;
    MONGODB_NAME: string;
    constructor() {
        this.MONGODB_USER = process.env.MONGODB_USER ?? "";
        this.MONGODB_PASSWORD = process.env.MONGODB_PASSWORD ?? "";
        this.MONGODB_HOST = process.env.MONGODB_HOST ?? "";
        this.MONGODB_PORT = process.env.MONGODB_PORT ?? "";
        this.MONGODB_NAME = process.env.MONGODB_NAME ?? "";
        this.connectMongoDB();
    }

    connectMongoDB() {
        try {
          if (this.MONGODB_USER && this.MONGODB_PASSWORD) {
            connect(`mongodb://${this.MONGODB_USER}:${this.MONGODB_PASSWORD}@${this.MONGODB_HOST}:${this.MONGODB_PORT}/${this.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
          } else {
            connect(`mongodb://${this.MONGODB_HOST}:${this.MONGODB_PORT}/${this.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
          }
        } catch (err) {
          throw err;
        }

    }
}
