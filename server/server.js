import express from "express";
import * as path from "path";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { FAQApi } from "./api/FAQApi.js";
import { BookingApi } from "./api/BookingApi.js";
import { OrganizationApi } from "./api/OrganizationApi.js";
import { EmployeeApi } from "./api/EmployeeApi.js";
import { WaterApi } from "./api/WaterApi.js";
import * as bodyParser from "express";
import { KnowledgeApi } from "./api/KnowledgeApi.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const mongoClient = new MongoClient(process.env.MONGODB_URL);

app.use(bodyParser.json());

mongoClient.connect().then(async () => {
  console.log("Connected to mongodb (FAQ)");
  app.use("/api/faqs", FAQApi(mongoClient.db(process.env.MONGODB_DATABASE)));
});

mongoClient.connect().then(async () => {
  console.log("Connected to mongodb (Booking)");
  app.use(
    "/api/bookings",
    BookingApi(mongoClient.db(process.env.MONGODB_DATABASE))
  );
});

mongoClient.connect().then(async () => {
  console.log("Connected to mongodb (Organizations)");
  app.use(
    "/api/organizations",
    OrganizationApi(mongoClient.db(process.env.MONGODB_DATABASE))
  );
});

mongoClient.connect().then(async () => {
  console.log("Connected to mongodb (Employees)");
  app.use(
    "/api/employees",
    EmployeeApi(mongoClient.db(process.env.MONGODB_DATABASE))
  );
});

mongoClient.connect().then(async () => {
  console.log("Connected to mongodb (Knowledge)");
  app.use(
    "/api/knowledge",
    KnowledgeApi(mongoClient.db(process.env.MONGODB_DATABASE))
  );
});

mongoClient.connect().then(async () => {
  console.log("Connected to mongodb (Water)");
  app.use("/api/water", WaterApi(mongoClient.db(process.env.MONGODB_DATABASE)));
});

app.use(express.static("../client/dist/"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
  console.log(`Link at Heroku: https://melioraimpact.herokuapp.com`);
});
