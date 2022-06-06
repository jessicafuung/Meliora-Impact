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
  const database = mongoClient.db("jest_test");
  await database.collection("bookings").deleteMany({});
  app.use("/api/booking", BookingApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("Booking to test database", () => {
  it("Adds new booking to database", async () => {
    const companyName = "jestTest";
    const contactPerson = "jestTest";
    const date = "09.02.2022";
    const email = "jestTest@test.com";
    const message = "jestTest";
    const telephone = "92929292";
    const time = "08:30";
    await request(app)
      .post("/api/booking")
      .send(companyName, contactPerson, date, email, message, telephone, time)
      .expect(200);
  });
  it("Trigger is booked", async () => {
    await request(app).post("/api/booking").expect(200);
  });
  it("Get 200 OK from bookingApi", async () => {
    request(app);
    expect(await request(app).get("/api/booking").expect(200));
  });
});
