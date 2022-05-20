import { Router } from "express";

export function WaterApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const water = await mongoDatabase
      .collection("organizations")
      .find()
      .map(({ name, info }) => ({
        name,
        info,
      }))
      .toArray();
    res.json(water);
    console.log("water");
  });

  return router;
}
