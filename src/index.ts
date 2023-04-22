import express from "express";
import { config } from "dotenv";
import { MongoGetWordsRepository } from "./repositories/get-words/mongo-get-words";
import { GetWordsController } from "./controllers/get-words/get-words";
import { MongoClient } from "./database/mongo";
import { MongoCreateWordRepository } from "./repositories/create-word/mongo-create-word";
import { CreateWordController } from "./controllers/create-word/create-word";

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

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
