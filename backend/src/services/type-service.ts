import typeServiceRepositories from "./../repositories/typeService-repository";

async function getAllTypeService() {
  const typeserviceAll = await typeServiceRepositories.getAll();
  if (!typeserviceAll) throw new Error("Type service not found");

  return typeserviceAll;
}

export default {
  getAllTypeService,
};
