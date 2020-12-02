import { Request, Response, NextFunction } from "express";

export class HomeController {
    public about(req: Request, res: Response, next: NextFunction) {
        return res.send("About me content");
        // return res.status(200).json({
        //     "data":[],
        //     "message": "Content"
        // });
    }
}
