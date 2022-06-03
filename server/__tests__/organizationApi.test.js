import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { OrganizationApi } from "../api/OrganizationApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("meliora_impact");
  await database.collection("organizations");
  app.use("/api/organizations", OrganizationApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("organizationApi test", () => {
  it("Shows all content in organization", async () => {
    const organizationContent = "";
    expect(await request(app).get("/api/organizations").expect(200));
  });
});
