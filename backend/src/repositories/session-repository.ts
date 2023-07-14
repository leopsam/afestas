import { Prisma } from ".prisma/client";
import { prisma } from "./../config";

async function findSessionByToken(token: string) {
  return await prisma.session.findFirst({
    where: {
      token: token,
    },
  });
}

async function createSession(data: any) {
  await prisma.session.create({
    data,
  });
}

export default {
  findSessionByToken,
  createSession,
};
