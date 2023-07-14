import themeRepositories from "./../repositories/theme-repository";

async function getAllTheme() {
  const themeAll = await themeRepositories.getAll();
  if (!themeAll) throw new Error("Theme not found");

  return themeAll;
}

export default {
  getAllTheme,
};
