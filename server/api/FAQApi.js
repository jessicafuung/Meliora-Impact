import { Router } from "express";

export function FAQApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const faqs = await mongoDatabase.collection("faqs").find().toArray();
        res.json(faqs);
        console.log(faqs)
    });

    return router;
}