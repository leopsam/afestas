import { Request, Response } from "express";
import userService from "./../services/user-services";
import httpStatus from "http-status";
import { User } from "../types/user-type";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const AllUsers = await userService.getAllUser();
    return res.status(httpStatus.OK).send(AllUsers);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND).send(err);
  }
}

export async function usersPost(req: Request, res: Response) {
  const userData: User = req.body;

  try {
    await userService.createUser( userData );
    return res.status(httpStatus.CREATED).send("User created successfully");
  } catch (err) {
    console.log(err)
    return res.status(httpStatus.BAD_REQUEST).send(err);
  }
}
