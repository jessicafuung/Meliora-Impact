import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { WaterApi } from "../api/WaterApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("meliora_impact");
  await database.collection("water");
  app.use("/api/water", WaterApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("WaterApi test", () => {
  it("Shows all content in waterApi", async () => {
    const waterContent =
      '[{"name":"Elemental Water Foundation","info":[{"title":"More clean water for Madagascar","description":"Rural areas face most difficulty having access to clean water, with over 85% of them lacking access. As many women & children are still spending hours each day to collect unsafe water, the Elemental Water Foundation has decided to develop and fund another project for a community in Madagascar.","imagetext":"Over 11 million people in Madagascar have no access to clean water.","image":"https://www.worldvision.org/wp-content/uploads/D200-0790-138A-2.jpg"},{"title":"Building wells","description":"We are building wells in different villages that so far never had full access to water. These wells are made rudimentary and provide poor quality water. However, with the availabilty of seawater, we are able to apply desalination in order to produce clean drinking water.","image":"https://thumbs.dreamstime.com/b/beautiful-portrait-african-children-drinking-outdoors-fresh-water-tap-beautiful-portrait-african-children-drinking-172697566.jpg"}]},{"name":"Pilot Project - Candelaria","info":[{"title":"Water Scarcity","description":"During wet season people harvest rainwater from their roofs, and it also collects in natural depressions on the land. Once the wet season is over, the water stored in these natural depressions is their sole source of water.","imagetext":"For almost everyone in Candelaria, rainwater is the main source of water.","image":"https://static.tripzilla.com/thumb/c/4/136388_800x.jpg"},{"title":"Sanitation","description":"The fact that people go to the bathroom outside has many health implications, and could be attributing to the poor quality of water.","imagetext":"Candelaria has a very severe sanitation problem; around 50% of the population go to the bathroom out in the open. ","image":"https://smartwatermagazine.com/sites/default/files/styles/thumbnail-830x455/public/fetching_water-unsplash.jpg?itok=RQqF5uij"}]}]';
    expect(await request(app).get("/api/water").expect(waterContent));
  });
});
