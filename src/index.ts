import express from "express";
import { config } from "dotenv";
import { MongoGetWordsRepository } from "./repositories/get-words/mongo-get-words";
import { GetWordsController } from "./controllers/get-words/get-words";
import { MongoClient } from "./database/mongo";
import { MongoCreateWordRepository } from "./repositories/create-word/mongo-create-word";
import { CreateWordController } from "./controllers/create-word/create-word";
import { MongoUpdateWordRepository } from "./repositories/update-word/mongo-update-word";
import { UpdateWordController } from "./controllers/update-word/update-word";
import { MongoFindWordRepository } from "./repositories/find-word/mongo-find-word";
import { FindWordController } from "./controllers/find-word/find-word";
import { MongoDeleteWordRepository } from "./repositories/delete-word/mongo-delete-word";
import { DeleteWordController } from "./controllers/delete-word/delete-word";

const main = async () => {
  config();

  const app = express();
  app.use(express.json());

  await MongoClient.connect();

  app.get("/words", async (req, res) => {
    const mongoGetWordsRepository = new MongoGetWordsRepository();
    const getWordsController = new GetWordsController(mongoGetWordsRepository);

    const { body, statusCode } = await getWordsController.handle();

    res.status(statusCode).send(body);
  });

  app.get("/words/:word", async (req, res) => {
    const mongoFindWordRepository = new MongoFindWordRepository();
    const findWordController = new FindWordController(mongoFindWordRepository);

    const { body, statusCode } = await findWordController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  app.post("/words", async (req, res) => {
    const mongoCreateWordRepository = new MongoCreateWordRepository();
    const createWordController = new CreateWordController(
      mongoCreateWordRepository
    );

    const { body, statusCode } = await createWordController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });

  app.patch("/words/:word", async (req, res) => {
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

  app.delete("/words/:word", async (req, res) => {
    const mongoDeleteWordRepository = new MongoDeleteWordRepository();
    const deleteWordController = new DeleteWordController(
      mongoDeleteWordRepository
    );

    const { body, statusCode } = await deleteWordController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
