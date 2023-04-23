import { Word } from "../../models/word";

export interface IDeleteWordRepository {
  deleteWord(name: string): Promise<Word>;
}
