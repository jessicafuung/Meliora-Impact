import { Router } from "express";

export function BookingApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const bookings = await mongoDatabase
      .collection("bookings")
      .find()
      .toArray();
    res.json(bookings);
    console.log(bookings);
  });

  return router;
}
