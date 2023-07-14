import userRepositories from "./../repositories/user-repository";
import sessionRepositories from "./../repositories/session-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signin(email: string, password: string) {
  const user = await userRepositories.findUserByEmail(email);
  if (!user) throw new Error("Incorrect email or password");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Incorrect email or password");

  const userId = user.id;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);

  await sessionRepositories.createSession({
    token,
    userId,
  });

  return { token, user };
}

export default {
  signin,
};
