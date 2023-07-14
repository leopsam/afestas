import { Router } from "express";
import { singIn } from "../controllers/auth-controller";
import { validateSchema } from "../middlewares/schemaValidation-middleware";
import { signInSchema } from "../schema/auth-schemas";

const authenticationRoutes = Router();

authenticationRoutes.post("/signin", validateSchema(signInSchema), singIn);

export { authenticationRoutes };
