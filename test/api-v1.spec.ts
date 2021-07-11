import { agent as request } from "supertest";
import { expect } from "chai";

import App from "../src/app";

describe("Test API v1 Routes", async () => {
  it("Root '/api/v1' endpoint should return valid JSON response", async () => {
    const res = await request(App).get("/api/v1");

    expect(res.status).to.equal(200);
    expect(res.type).to.equal("application/json");
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body.message).to.equal("API v1");
  });
});
