import { Router } from "express";
import { postRequestForUser } from "../controllers/request-controller";
import { authValidation } from "../middlewares/auth-middleware";

const requestRoutes = Router();

requestRoutes.all("/*", authValidation).post("/", postRequestForUser);

export { requestRoutes };
