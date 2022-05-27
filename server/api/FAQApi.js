import { Router } from "express";

export function FAQApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    const { search } = req.query;
    const searchArray = [];
    let replaceSpace = search.toLowerCase().split(" ");

    if (search) {
      const faqs = await mongoDatabase.collection("test").find().toArray();
      faqs.filter((q) => {
        for (let item in replaceSpace) {
          if (q.question.toLowerCase().includes(replaceSpace[item]) === true) {
            console.log(replaceSpace[item]);
            searchArray.push(q);
          }
        }
      });
      let filteredArray = searchArray.filter(onlyUnique);
      res.json(filteredArray);
      searchArray.length = 0;
    } else {
      const faqs = await mongoDatabase.collection("test").find().toArray();
      res.json(faqs);
    }
  });

  return router;
}
