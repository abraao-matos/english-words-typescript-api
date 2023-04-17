import { userInfo } from "os";
import {
  CreateWordParams,
  ICreateWordRepository,
} from "../../controllers/create-word/protocols";
import { MongoClient } from "../../database/mongo";
import { Word } from "../../models/word";

export class MongoCreateWord implements ICreateWordRepository {
  async createWord(params: CreateWordParams): Promise<Word> {
    const { insertedId } = await MongoClient.db
      .collection("words")
      .insertOne(params);

    const word = await MongoClient.db
      .collection<Word>("words")
      .findOne({ _id: insertedId });

    if (!word) {
      throw new Error("Word not created");
    }

    return word;
  }
}
