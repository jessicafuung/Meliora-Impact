import { Router } from "express";

export function BookingApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const query = {};

        const { isBooked } = req.query;

        if(isBooked) {
            query.isBooked = isBooked
        }

        const bookingsQuery = await mongoDatabase
            .collection("bookings")
            .find(query)
            .map(({_id, date, time, isBooked}) => ({
                _id,
                date,
                time,
                isBooked
            }))
            .toArray();

        const bookingsWithoutQuery = await mongoDatabase
            .collection("bookings")
            .find(query)
            .map(({_id, date, time, isBooked}) => ({
                _id,
                date,
                time,
                isBooked
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

    router.post("/",  (req, res) => {
        const {date} = req.body;

        mongoDatabase
            .collection("bookings")
            .insertOne({date});
        res.sendStatus(200)
    })

    return router;
}