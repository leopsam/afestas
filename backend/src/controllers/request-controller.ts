import requestServices from "./../services/request-services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postRequestForUser(req: Request, res: Response) {
  const { userId, description, themeId, serviceTypeId } = req.body;

  try {
    const requestUser = await requestServices.postCreateRequest({
      userId,
      description,
      themeId,
      serviceTypeId,
    });
    return res.status(httpStatus.CREATED).send(requestUser);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send(err);
  }
}
