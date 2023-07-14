import { prisma } from "./../config";

async function getAll() {
  return prisma.theme.findMany();
}

export default {
  getAll,
};
