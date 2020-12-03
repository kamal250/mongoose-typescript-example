import { Request, Response, NextFunction } from "express";
import { SessionTokenRepository } from "./../../repository/mongoDB";
import { sessionToken } from "./../../repository/mongoDB/models/session-token.model";

export class HomeController {
  public async createToken(req: Request, res: Response, next: NextFunction) {
    //TODO :: Dynamically receive email from req.body
    let sessionInfo = new sessionToken({
      email: "kamal.joshi@iflair.com",
    });
    //TODO :: Generate dynamic random string
    let token = "random-token";
    const sessionTokenRepository = new SessionTokenRepository();
    const isUpdated = await sessionTokenRepository.insertToken(
      sessionInfo,
      token
    );
    let message = isUpdated ? "Saved" : "Something went wrong!";
    // return res.send("About me content");
    return res.status(200).json({
      data: [],
      message: message,
    });
  }

  public async about(req: Request, res: Response, next: NextFunction) {
    const sessionTokenRepository = new SessionTokenRepository();
    let message = "Something went wrong!";
    //TODO :: Dynamically receive email from req.body & generate random new string
    const isUpdated = await sessionTokenRepository
      .updateToken("random-token1", "kamal.joshi@iflair.com")
      .then(() => {
        console.log(isUpdated);
        message = "Updated";
      });
    // return res.send("About me content");
    return res.status(200).json({
      data: [],
      message: message,
    });
  }
}
