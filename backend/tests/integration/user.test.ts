import app, { init, close } from "./../app";
import supertest from "supertest";
import { createUser } from "./../services/user-services";
import { prisma } from "./../config";

beforeAll(async () => {
  await init();
  await prisma.user.deleteMany({});

  //await cleanDb();
});

afterAll(async () => {
  await prisma.user.deleteMany({});

  //await cleanDb();
});

const api = supertest(app);

describe("POST /user", () => {
  it("should post new user", async () => {
    //await prisma.user.deleteMany({})
    const requestBody = {
      email: "leo8.email.com",
      password: "123456",
      name: "asdasdasdasasd",
      cpf: "111111",
      birthday: "2023-05-17",
      phone: "111111",
      street: "sdfsdfsdfsdf",
      city: "sdfsdfsdfsdf",
      complement: "sdfsdfsdfsdf",
      state: "rj",
      number: 34,
      cep: "3455",
      avatar:
        "https://www.papeldeparede.etc.br/fotos/wp-content/uploads/jake_hora_de_aventura.jpg",
    };

    const response = await api.post("/user/signup").send(requestBody);

    expect(response.status).toBe(201);
  });
  it("should give error because email cannot be repeated", async () => {
    // await prisma.user.deleteMany({})
    const requestBody = {
      email: "leo8.email.com",
      password: "123456",
      name: "asdasdasdasasd",
      cpf: "111111",
      birthday: "2023-05-17",
      phone: "111111",
      street: "sdfsdfsdfsdf",
      city: "sdfsdfsdfsdf",
      complement: "sdfsdfsdfsdf",
      state: "rj",
      number: 34,
      cep: "3455",
      avatar:
        "https://www.papeldeparede.etc.br/fotos/wp-content/uploads/jake_hora_de_aventura.jpg",
    };

    await api.post("/user/signup").send(requestBody);
    const response = await api.post("/user/signup").send(requestBody);

    expect(response.status).toBe(400);
  });
});
