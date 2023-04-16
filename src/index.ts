import express from "express";
import { config } from "dotenv";
import { MongoGetWordsRepository } from "./repositories/get-words/mongo-get-words";
import { GetWordsController } from "./controllers/get-words/get-words";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();
  await MongoClient.connect();

  app.get("/words", async (req, res) => {
    const mongoGetWordsRepository = new MongoGetWordsRepository();
    const getWordsController = new GetWordsController(mongoGetWordsRepository);

    const { body, statusCode } = await getWordsController.handle();

    res.status(statusCode).send(body);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
