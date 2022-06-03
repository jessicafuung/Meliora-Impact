import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { OrganizationApi } from "../api/OrganizationApi.js";
import { KnowledgeApi } from "../api/KnowledgeApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("meliora_impact");
  await database.collection("knowledge");
  app.use("/api/knowledge", KnowledgeApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("KnowledgeApi test", () => {
  it("Shows all content in knowledge database", async () => {
    const waterContent =
      '[{"name":"The BOMA project","info":[{"title":"The vision","description":"The Boma project is a nonprofit organization that works to provide poor women living in the arid lands in Africa with the educational, financial and technological resources to lift themselves out of poverty.","imagetext":"Over one fifth of children in Africa between the ages of 6 and 11 are out of school.","image":"https://www.comofoundation.org/wp-content/uploads/2019/03/6554_BOMA-PROJECT_20110210-e1553672900243.jpg"},{"title":"Building Resilence in Uganda","description":"More than one million people have fled into Uganda over the last decade due to violence in South Sudan, Ethiopia and Eritrea.","image":"https://media.istockphoto.com/photos/a-smiling-ugandan-girl-picture-id1071198328?k=20&m=1071198328&s=612x612&w=0&h=TzgBjqg5I9Ng2x0in63dcRraoYh_5iTWrJ9BwIjiyvA="}]},{"name":"Grameen Foundation","info":[{"title":"The vision","description":"We create tools and resources to help people help themselves.","imagetext":"Only one in ten households in Africa is connected to the internet.","image":"https://www.greenqueen.com.hk/wp-content/uploads/2014/01/Paper-Prototyping-2-464kb.jpg"},{"title":"Digital Loans","description":"In big parts og Kenya people live in poverty. Many of the inhabitants are smallholder farmers and have previously been unable to borrow money.","image":"https://borgenproject.org/wp-content/uploads/internet-africa.jpg"}]}]';
    expect(await request(app).get("/api/knowledge").expect(waterContent));
  });
});
