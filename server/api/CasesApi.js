import {Router} from "express";

export function CasesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const cases = await mongoDatabase.collection("organizations")
            .find()
            .map(({name, category, info}) => ({
                name,
                category,
                info,
            }))
            .toArray();
        res.json(cases);
        console.log("cases")
    });

    return router;
}