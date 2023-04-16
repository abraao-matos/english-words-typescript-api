import { Word } from "../../models/word";
import { HttpResponse } from "../protocols";

export interface IGetWordsController {
  handle(): Promise<HttpResponse<Word[]>>;
}

export interface IGetWordsRepository {
  getWords(): Promise<Word[]>;
}
