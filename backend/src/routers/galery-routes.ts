import { Router } from "express";
import { getAllGalery } from "../controllers/galery-controller";

const galeryRoutes = Router();

galeryRoutes.get("/all", getAllGalery);

export { galeryRoutes };
