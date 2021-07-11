import { Router, Request, Response } from "express";

export const apiV1Router: Router = Router();

apiV1Router.get("/", (req: Request, res: Response) => {
  res.send({
    message: "API v1"
  });
});
