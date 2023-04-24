import express from "express";
import { GetWordsController } from "../controllers/get-words/get-words";
import { MongoGetWordsRepository } from "../repositories/get-words/mongo-get-words";

export default (router: express.Router) => {
  router.get("/words", async (req, res) => {
    const mongoGetWordsRepository = new MongoGetWordsRepository();
    const getWordsController = new GetWordsController(mongoGetWordsRepository);

    const { body, statusCode } = await getWordsController.handle();

    res.status(statusCode).send(body);
  });
};
