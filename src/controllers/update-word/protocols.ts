import { Word } from "../../models/word";

export interface updateUserParams {
  word?: string;
  definition?: string;
  examples?: string[];
  synonyms?: string[];
  translations?: {
    [key: string]: string;
  };
}

export interface IUpdateWordRepository {
  updateWord(name: string, params: updateUserParams): Promise<Word>;
}
