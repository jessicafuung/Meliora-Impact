import { Router } from "express";

export function BookingApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};

    const { isBooked } = req.query;

    if (isBooked) {
      query.isBooked = isBooked;
    }

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

    if (bookingsQuery.length >= 1) {
      // If succeed finding isBooked = false
      res.json(bookingsQuery);
    } else {
      // If not, return the whole collection
      res.json(bookingsWithoutQuery);
    }
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
