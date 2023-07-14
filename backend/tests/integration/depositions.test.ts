import app, { init, close } from "./../../src/app";
import supertest from "supertest";

beforeAll(async () => {
  await init();
});

const api = supertest(app);

describe("GET /depositions", () => {
  it("should get all depositions", async () => {
    const response = await api.get("/deposition/all");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          depositions: expect.any(String),
          photo: expect.any(String),
        }),
      ])
    );
  });
});
