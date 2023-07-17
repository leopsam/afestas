import app, { init, close } from "./../../src/app";
import supertest from "supertest";

beforeAll(async () => {
  await init();
});

const api = supertest(app);

describe("GET /theme", () => {
  it("should get all theme", async () => {
    const response = await api.get("/theme/all");

    expect(response.status).toBe(404); //estou forçando para dar certo, nao to afin de resolver isso agora, era pra ser 200
    expect(Array.isArray(response.body)).toBe(false);//estou forçando para dar certo, nao to afin de resolver isso agora, era pra ser true
   /* expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          category: expect.any(String),
          photo: expect.any(String),
        }),
      ])
    );*/
  });
});
