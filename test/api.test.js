const supertest = require("supertest");
const chai = require("chai");
const app = require("../src/app"); // Substitua pelo caminho correto para o seu app.js

const expect = chai.expect;
const request = supertest(app);

describe("API Tests", () => {
  it("GET /health-check -- application health check", async () => {
    const response = await request.get("/health-check");
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("OK");
  });

  // Adicione mais testes aqui...
});
