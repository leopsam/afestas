import { prisma } from "./../config";

async function getAll() {
  return prisma.gallery.findMany();
}

export default {
  getAll,
};
