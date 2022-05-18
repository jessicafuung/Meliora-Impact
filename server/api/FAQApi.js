import { Router } from "express";

export function FAQApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {

        const { search } = req.query

        console.log(search)

        if( search ) {
            let arg = {'question': {$eq: search}}
            let collection = context.services
                .get("smidig_test")
                .collection("test")

            let pipeline = [
                {
                    $search: {
                       index: "SearchFAQ",
                        text: {
                            query: arg,
                            path: {
                                'wildcard': '*'
                            }
                        }
                    }
                }
            ]
            console.log(faqs.aggregate(pipeline))
            res.json(collection.aggregate(pipeline))
        }else{
            const faqs = await mongoDatabase
                .collection("test")
                .find()
                .map(({ _id, question, answer }) => ({
                    _id,
                    question,
                    answer,
                }))
                .toArray();
            res.json(faqs);
            console.log(faqs)
        }


    });

    return router;
}