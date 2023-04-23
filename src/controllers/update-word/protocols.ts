import { Word } from "../../models/word";

export interface UpdateUserParams {
  word?: string;
  definition?: string;
  examples?: string[];
  synonyms?: string[];
  translations?: {
    [key: string]: string;
  };
}

export interface IUpdateWordRepository {
  updateWord(name: string, params: UpdateUserParams): Promise<Word>;
}
