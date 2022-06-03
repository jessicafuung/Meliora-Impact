import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { FAQApi } from "../api/FAQApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("meliora_impact");
  await database.collection("faq");
  app.use("/api/faq", FAQApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("Faq test", () => {
  it("dummyTest", () => {
    const dummyTest = 2 + 2;
    expect(dummyTest === 4);
  });
  it("Shows all content in faq", async () => {
    request(app);
    expect(
      await request(app)
        .get("/api/faq")
        .expect(
          `[{"_id":"62948211f99974de86ecc1bf","question":"Who can join Meliora Impact?","answer":"answer for who can join Meliora impact?"},{"_id":"628249e0ff7db87af23de573","question":"What are the benefits of using Meliora impact?","answer":"First of all, it takes time to vet nonprofits / projects, which is something a lot of companies don’t have the resources and/or knowledge for. We do this work for you. We will provide the companies with impact measurements—of their donations as well as of the  projects overall which they chose to support. They get branding material through us. We help them align their company values with projects they can support. Emplyees and customers can vote on which nonprofits they would like to support. They get access to a dashboard over their donations and their impact where they will also get exclusive inside stories and reports."},{"_id":"628e6b303aa14c0ce777bafe","question":"Who can donate to npo's?","answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla turpis. Sed malesuada ipsum sit amet libero suscipit pellentesque. Cras ut mollis sapien, eget faucibus dolor. Nam quam risus, sagittis sed sollicitudin vitae, gravida sed velit. Sed hendrerit consectetur sem at imperdiet. Suspendisse pulvinar metus sed condimentum feugiat. Suspendisse viverra, quam nec porttitor hendrerit, magna sapien tincidunt lacus, eget vestibulum turpis sem ut magna. In suscipit lobortis magna, sit amet imperdiet lorem consequat eu. Cras interdum lectus nulla, id molestie odio blandit quis. Maecenas vitae congue erat."},{"_id":"628e6b743aa14c0ce777baff","question":"Why should I donate through Meliora Impact?","answer":"Vestibulum vitae erat congue, fringilla augue non, ornare libero. Nullam imperdiet est et felis consectetur, ac feugiat ante ornare. Vivamus dictum diam quis commodo maximus. Nullam hendrerit orci a varius malesuada. Vivamus risus libero, finibus vitae odio eget, molestie euismod nisl. Suspendisse egestas lacus lacus. Vivamus rhoncus nulla vel nunc congue, et suscipit lorem consectetur. Sed convallis vel diam nec semper. Suspendisse dapibus tempus volutpat."},{"_id":"628e6c953aa14c0ce777bb00","question":"Where can you find us?","answer":"Vestibulum vitae erat congue, fringilla augue non, ornare libero. Nullam imperdiet est et felis consectetur, ac feugiat ante ornare. Vivamus dictum diam quis commodo maximus. Nullam hendrerit orci a varius malesuada. Vivamus risus libero, finibus vitae odio eget, molestie euismod nisl. Suspendisse egestas lacus lacus. Vivamus rhoncus nulla vel nunc congue, et suscipit lorem consectetur. Sed convallis vel diam nec semper. Suspendisse dapibus tempus volutpat."},{"_id":"628e6dc03aa14c0ce777bb01","question":"Accountability and transparency","answer":" All nonprofits on our curated list need to have recent financial statements online (for the last tax year). At least 65% of funds need to go directly to the cause. "}]`
        )
    );
  });
  const search = "join";
  it("Shows search result from faq database", async () => {
    expect(
      await request(app)
        .get(`/api/faq?search=${search}`)
        .expect(
          '[{"_id":"62948211f99974de86ecc1bf","question":"Who can join Meliora Impact?","answer":"answer for who can join Meliora impact?"}]'
        )
    );
  });
});
