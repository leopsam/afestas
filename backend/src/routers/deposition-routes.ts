import { Router } from "express";
import { getAll } from "../controllers/deposition-controller";

const depositionRoutes = Router();

depositionRoutes.get("/all", getAll);

export { depositionRoutes };
