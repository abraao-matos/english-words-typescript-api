import express from "express";
import { DeleteWordController } from "../controllers/delete-word/delete-word";
import { MongoDeleteWordRepository } from "../repositories/delete-word/mongo-delete-word";

export default (router: express.Router) => {
  router.delete("/words/:word", async (req, res) => {
    const mongoDeleteWordRepository = new MongoDeleteWordRepository();
    const deleteWordController = new DeleteWordController(
      mongoDeleteWordRepository
    );

    const { body, statusCode } = await deleteWordController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });
};
