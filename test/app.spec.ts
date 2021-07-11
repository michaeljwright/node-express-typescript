import { agent as request } from "supertest";
import { expect } from "chai";

import App from "../src/app";

describe("Test App Routes", async () => {
  it("Root '/' endpoint should return valid JSON response", async () => {
    const res = await request(App).get("/");

    // const res = await request(app)
    //     .post('/api/todo').send({todo: "first todo"});

    expect(res.status).to.equal(200);
    expect(res.type).to.equal("application/json");
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body.message).to.equal("Hello World!");
  });
});
