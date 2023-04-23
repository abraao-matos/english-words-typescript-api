import { Word } from "../../models/word";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IDeleteWordController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Word>>;
}

export interface IDeleteWordRepository {
  deleteWord(name: string): Promise<Word>;
}
