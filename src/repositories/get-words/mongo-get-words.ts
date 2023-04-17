import { IGetWordsRepository } from "../../controllers/get-words/protocols";
import { MongoClient } from "../../database/mongo";
import { Word } from "../../models/word";

export class MongoGetWordsRepository implements IGetWordsRepository {
  async getWords(): Promise<Word[]> {
    const words = await MongoClient.db
      .collection<Word>("words")
      .find({})
      .toArray();

    return words;
  }
}
