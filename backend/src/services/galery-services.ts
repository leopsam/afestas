import galeryRepositories from "./../repositories/galery-repository";

async function getAllGalery() {
  const galleryAll = await galeryRepositories.getAll();
  if (!galleryAll) throw new Error("Gallery not found");

  return galleryAll;
}

export default {
  getAllGalery,
};
