import { Prisma } from ".prisma/client";
import { prisma } from "./../config";

async function createRequest(data: any) {
  return prisma.requests.create({
    data,
  });
}

export default {
  createRequest,
};
