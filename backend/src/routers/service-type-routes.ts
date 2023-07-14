import { Router } from "express";
import { getAll } from "../controllers/service-type-controller";
import { authValidation } from "../middlewares/auth-middleware";

const serviceTypeRoutes = Router();

serviceTypeRoutes.get("/all", getAll);

export { serviceTypeRoutes };
