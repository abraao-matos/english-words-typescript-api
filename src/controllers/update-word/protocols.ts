import { Word } from "../../models/word";
import { HttpRequest, HttpResponse } from "../protocols";

export interface updateUserParams {
  word?: string;
  definition?: string;
  examples?: string[];
  synonyms?: string[];
  translations?: {
    [key: string]: string;
  };
}

export interface IUpdateWordController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Word>>;
}

export interface IUpdateWordRepository {
  updateWord(name: string, params: updateUserParams): Promise<Word>;
}
