import { Router } from "express";

export function BookingApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};

    const bookingsQuery = await mongoDatabase
      .collection("bookings")
      .find(query)
      .map(({ _id, date, time, isBooked }) => ({
        _id,
        date,
        time,
        isBooked,
      }))
      .toArray();

    const bookingsWithoutQuery = await mongoDatabase
      .collection("bookings")
      .find(query)
      .map(({ _id, date, time, isBooked }) => ({
        _id,
        date,
        time,
        isBooked,
      }))
      .toArray();

    res.json(bookingsQuery);
  });

  router.post("/", (req, res) => {
    const {
      companyName,
      contactPerson,
      email,
      telephone,
      date,
      time,
      message,
    } = req.body;

    mongoDatabase.collection("bookings").insertOne({
      companyName,
      contactPerson,
      email,
      telephone,
      date,
      time,
      message,
    });
    res.sendStatus(200);
  });

  return router;
}
