import { Router } from "express";

export function OrganizationApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const organizations = await mongoDatabase.collection("organizations").find().toArray();
        res.json(organizations);
        console.log(organizations)
    });

    return router;
}