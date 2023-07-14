import app, { init, close } from "./../../src/app";
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

describe("POST /auth/signin", () => {
  it("should post new auth/signin", async () => {
    //await prisma.user.deleteMany({})
    const requestBody = {
      email: "text.email.com",
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

    const response = await api.post("/auth/signin").send({
      email: "text.email.com",
      password: "123456",
    });

    expect(response.status).toBe(200);
  });
  it("should return an invalid email or password error", async () => {
    // await prisma.user.deleteMany({})
    const requestBody = {
      email: "text.email.com",
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

    const response = await api.post("/auth/signin").send({
      email: "wwwwwwwww",
      password: "123456",
    });

    expect(response.status).toBe(422);
  });
});
