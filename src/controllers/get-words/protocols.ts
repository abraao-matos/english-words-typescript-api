import { Word } from "../../models/word";

export interface IGetWordsRepository {
  getWords(): Promise<Word[]>;
}
