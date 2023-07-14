import depositionService from "./../services/deposition-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getAll(req: Request, res: Response) {
  try {
    const AllDeposition = await depositionService.getAllDepositions();
    return res.status(httpStatus.OK).send(AllDeposition);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND).send(err);
  }
}
