import { Router } from "express";

export function BookingApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const bookings = await mongoDatabase.collection("bookings").find().toArray();
        res.json(bookings);
        console.log(bookings)
    });

    router.post("/",  (req, res) => {
        const {date} = req.body;

        mongoDatabase
            .collection("bookings")
            .insertOne({date});
        res.sendStatus(200)
    })

    return router;
}