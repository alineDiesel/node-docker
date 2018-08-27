const request = require("supertest");
const index = require("../../src/index");

describe("Index", () => {
  test("Respondendo a home", () => {
    request(index).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
