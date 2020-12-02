import express from "express";
import homeRouter from "./src/api/home/home.router";

class App {
  public app: express.Application;
  constructor() {
    this.app = express();    
    this.router();
  }

  private router():void {
    this.app.use(homeRouter);
  }
}

export default new App().app;
