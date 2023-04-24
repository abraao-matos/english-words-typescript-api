import express from "express";

import { FindWordController } from "../controllers/find-word/find-word";
import { MongoFindWordRepository } from "../repositories/find-word/mongo-find-word";

export default (router: express.Router) => {
  router.get("/words/:word", async (req, res) => {
    const mongoFindWordRepository = new MongoFindWordRepository();
    const findWordController = new FindWordController(mongoFindWordRepository);

    const { body, statusCode } = await findWordController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });
};
