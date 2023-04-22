import { Word } from "../../models/word";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateWordController {
  handle(
    httpRequest: HttpRequest<CreateWordParams>
  ): Promise<HttpResponse<Word>>;
}

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
