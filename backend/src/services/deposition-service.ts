import depositionRepositories from "./../repositories/deposition-repository";

async function getAllDepositions() {
  const depositionsAll = await depositionRepositories.getAll();
  if (!depositionsAll) throw new Error("Depositions not found");

  return depositionsAll;
}

export default {
  getAllDepositions,
};
