import { Router } from "express";
import { HomeController } from "./home.controller";

class HomeRouter {
  homeController: HomeController;
  router: Router;
  constructor() {
    this.router = Router();
    this.homeController = new HomeController();
    this.init();
  }

  init() {
    this.router.post("/create-token", this.homeController.createToken);
    this.router.get("/", this.homeController.about);
  }
}

const homeRouter = new HomeRouter();
export default homeRouter.router;
