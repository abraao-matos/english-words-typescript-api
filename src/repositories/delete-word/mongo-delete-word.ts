import { IDeleteWordRepository } from "../../controllers/delete-word/protocols";
import { MongoClient } from "../../database/mongo";
import { Word } from "../../models/word";

export class MongoDeleteWordRepository implements IDeleteWordRepository {
  async deleteWord(name: string): Promise<Word> {
    const word = await MongoClient.db
      .collection<Word>("words")
      .findOne({ word: name });

    if (!word) {
      throw new Error("Word not found");
    }

    const { deletedCount } = await MongoClient.db
      .collection("words")
      .deleteOne({ word: name });

    if (!deletedCount) {
      throw new Error("Word not deleted");
    }

    return word;
  }
}
