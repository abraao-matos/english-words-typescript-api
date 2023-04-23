import { Word } from "../../models/word";

export interface CreateWordParams {
  word: string;
  definition: string;
  examples: string[];
  synonyms?: string[];
  translations: {
    [key: string]: string;
  };
}

export interface ICreateWordRepository {
  createWord(params: CreateWordParams): Promise<Word>;
  findWordByName(name: string): Promise<Word | null>;
}
