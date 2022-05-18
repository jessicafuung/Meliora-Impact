import {Router} from "express";

export function FAQApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {

        const { search } = req.query
        console.log(search)

        let testSearch = [
            "can", "who", "join"
        ]

        if( search ) {
            const faqs = await mongoDatabase
                .collection("test")
                .find()
                .toArray();
            let searchArray = faqs.filter((q) => {

                return q.question.toLowerCase().includes(
                    search )
            })
            /*
            const loopTest = testSearch.forEach(item => {
                "{item}"
            })

             */

            console.log(searchArray)
            res.json(searchArray)
        }else{
            const faqs = await mongoDatabase
                .collection("test")
                .find()
                .toArray();
            res.json(faqs);
        }
    });

    return router;
}