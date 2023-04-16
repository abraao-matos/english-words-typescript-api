import express from "express";
import { config } from "dotenv";
import { MongoGetWordsRepository } from "./repositories/get-words/mongo-get-words";
import { GetWordsController } from "./controllers/get-words/get-words";

config();
const app = express();
const port = process.env.PORT || 8000;

app.get("/words", async (req, res) => {
  const mongoGetWordsRepository = new MongoGetWordsRepository();
  const getWordsController = new GetWordsController(mongoGetWordsRepository);

  const { body, statusCode } = await getWordsController.handle();

  res.status(statusCode).send(body);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
