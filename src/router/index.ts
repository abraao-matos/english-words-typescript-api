import express from "express";
import getWords from "./get-words";
import findWord from "./find-word";
import createWord from "./create-word";
import updateWord from "./update-word";
import deleteWord from "./delete-word";

const router = express.Router();

export default (): express.Router => {
  getWords(router);
  findWord(router);
  createWord(router);
  updateWord(router);
  deleteWord(router);
  return router;
};
