import {Router} from "express";

export function KnowledgeApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const knowledge = await mongoDatabase.collection("knowledge")
            .find()
            .map(({name, info}) => ({
                name,
                info,
            }))
            .toArray();
        res.json(knowledge);
        console.log("knowledge")
    });

    return router;
}