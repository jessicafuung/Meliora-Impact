import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { EmployeeApi } from "../api/EmployeeApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("meliora_impact");
  await database.collection("Employees");
  app.use("/api/employees", EmployeeApi(database));
});
afterAll(() => {
  mongoClient.close();
});
