import { Router } from "express";
import { getAllUsers, usersPost } from "../controllers/user-controller";
import { validateSchema } from "../middlewares/schemaValidation-middleware";
import { createUserSchema } from "../schema/user-schemas";

const userRoutes = Router();

userRoutes
  .post("/signup", validateSchema(createUserSchema), usersPost)
  .get("/all", getAllUsers);

export { userRoutes };
