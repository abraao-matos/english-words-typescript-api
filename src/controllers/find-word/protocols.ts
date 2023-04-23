import { Word } from "../../models/word";

export interface IFindWordRepository {
  findWord(name: string): Promise<Word>;
}
