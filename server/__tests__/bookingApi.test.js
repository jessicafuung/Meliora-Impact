import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { BookingApi } from "../api/BookingApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("meliora_impact");
  await database.collection("bookings");
  app.use("/api/booking", BookingApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("Booking test", () => {
  it("Shows all content in booking", async () => {
    request(app);
    expect(await request(app).get("/api/booking").expect("[]"));
  });
});
