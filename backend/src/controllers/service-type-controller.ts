import { Request, Response } from "express";
import httpStatus from "http-status";
import typeService from "./../services/type-service";

export async function getAll(req: Request, res: Response) {
  try {
    const AllServiceType = await typeService.getAllTypeService();
    return res.status(httpStatus.OK).send(AllServiceType);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND).send(err);
  }
}
