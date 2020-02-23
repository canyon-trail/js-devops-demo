import server from "~/src/server";
import { expect } from "chai";
import request from "supertest";

describe("hello endpoint", () => {
  it("should return 'Sup World!'", async () => {
    var resp = await request(server)
      .get("/")
      .expect(200);

    expect(resp.text).to.equal("Sup World!");
  });
});

