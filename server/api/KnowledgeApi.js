import { Router } from "express";

export function KnowledgeApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const cases = await mongoDatabase
      .collection("knowledge")
      .find()
      .map(({ name, info }) => ({
        name,
        info,
      }))
      .toArray();
    res.json(cases);
    console.log("knowledge");
  });

  return router;
}
