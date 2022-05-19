import {Router} from "express";

export function CasesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const cases = await mongoDatabase.collection("organizations")
            .find()
            .map(({name, info}) => ({
                name,
                info,
            }))
            .toArray();
        res.json(cases);
        console.log("cases")
    });

    return router;
}