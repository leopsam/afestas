import userRepositories from "./../repositories/user-repository";
import bcrypt from "bcrypt";
import { User } from "../types/user-type";

async function getAllUser() {
  return await userRepositories.getAll();
}

export async function createUser(userData: User) {
  const hashedPassword = await bcrypt.hash(userData.password, 12);
  const createUser = await userRepositories.createUser({
    ...userData,
    password: hashedPassword,
  });
  if (!createUser) throw new Error("Unable to register user1");

  return createUser;
}

export default {
  getAllUser,
  createUser,
};
