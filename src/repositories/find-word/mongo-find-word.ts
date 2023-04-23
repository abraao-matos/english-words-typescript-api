import { IFindWordRepository } from "../../controllers/find-word/protocols";
import { MongoClient } from "../../database/mongo";
import { Word } from "../../models/word";

export class MongoFindWordRepository implements IFindWordRepository {
  async findWord(name: string): Promise<Word> {
    const word = await MongoClient.db
      .collection<Word>("words")
      .findOne({ word: name });

    if (!word) {
      throw new Error("Word not found");
    }

    return word;
  }
}
