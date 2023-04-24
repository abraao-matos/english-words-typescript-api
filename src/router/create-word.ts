import express from "express";
import { CreateWordController } from "../controllers/create-word/create-word";
import { MongoCreateWordRepository } from "../repositories/create-word/mongo-create-word";

export default (router: express.Router) => {
  router.post("/words", async (req, res) => {
    const mongoCreateWordRepository = new MongoCreateWordRepository();
    const createWordController = new CreateWordController(
      mongoCreateWordRepository
    );

    const { body, statusCode } = await createWordController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });
};
