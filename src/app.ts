import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();

import { apiV1Router } from "./routes/api-v1";

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.express.use(helmet());
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get("/", (req: Request, res: Response) => {
      res.send({
        message: "Hello World!"
      });
    });

    this.express.use("/", router);

    this.express.use("/api/v1", apiV1Router);
  }
}

export default new App().express;
