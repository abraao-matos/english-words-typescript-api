import {
  IUpdateWordRepository,
  updateUserParams,
} from "../../controllers/update-word/protocols";
import { MongoClient } from "../../database/mongo";
import { Word } from "../../models/word";

export class MongoUpdateWordRepository implements IUpdateWordRepository {
  async updateWord(name: string, params: updateUserParams): Promise<Word> {
    await MongoClient.db.collection("words").updateOne(
      { word: name },
      {
        $set: {
          ...params,
        },
      }
    );

    const word = await MongoClient.db
      .collection<Word>("words")
      .findOne({ word: name });

    if (!word) {
      throw new Error("Word not updated");
    }

    return word;
  }
}
