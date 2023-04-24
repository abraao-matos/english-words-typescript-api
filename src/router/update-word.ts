import express from "express";
import { UpdateWordController } from "../controllers/update-word/update-word";
import { MongoUpdateWordRepository } from "../repositories/update-word/mongo-update-word";

export default (router: express.Router) => {
  router.patch("/words/:word", async (req, res) => {
    const mongoUpdateWordRepository = new MongoUpdateWordRepository();
    const updateWordController = new UpdateWordController(
      mongoUpdateWordRepository
    );

    const { body, statusCode } = await updateWordController.handle({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  });
};
