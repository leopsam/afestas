import { prisma } from "./../config";

async function getAll() {
  return prisma.serviceType.findMany();
}

export default {
  getAll,
};
