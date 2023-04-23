import { Word } from "../../models/word";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IFindWordController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Word>>;
}

export interface IFindWordRepository {
  findWord(name: string): Promise<Word>;
}
