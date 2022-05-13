import {Router} from "express";

export function EmployeeApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const employees = await mongoDatabase.collection("employees").find().toArray();
        res.json(employees);
        console.log(employees)
    });

    return router;
}