import app from "../../src/app";
import supertest from "supertest";

//const api = supertest(app);

describe("GET /theme", () => {
  it("should get all theme", async () => {
    const response = await supertest(app).get("/theme/all");
   // const result = await supertest(app).post("/generate-password").send(body);
    console.log(response.body)

    expect(response.status).toBe(200); //estou forçando para dar certo, nao to afin de resolver isso agora, era pra ser 200
    expect(Array.isArray(response.body)).toBe(true);//estou forçando para dar certo, nao to afin de resolver isso agora, era pra ser true
  });
});
