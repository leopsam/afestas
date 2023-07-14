import themeService from "./../services/theme-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getAll(req: Request, res: Response) {
  try {
    const result = await themeService.getAllTheme();
    return res.status(httpStatus.OK).send(result);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND).send(err);
  }
}
