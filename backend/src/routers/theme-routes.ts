import { Router } from "express";
import { getAll } from "../controllers/theme-controller";
import { authValidation } from "../middlewares/auth-middleware";

const themeRoutes = Router();

themeRoutes.get("/all", getAll);

export { themeRoutes };
