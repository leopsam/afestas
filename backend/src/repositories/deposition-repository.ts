import { prisma } from "./../config";

async function getAll() {
  return prisma.depositions.findMany();
}

export default {
  getAll,
};
