import { Word } from "../../models/word";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetWordsRepository } from "./protocols";

export class GetWordsController implements IController {
  constructor(private readonly getWordsRepository: IGetWordsRepository) {}
  async handle(): Promise<HttpResponse<Word[] | string>> {
    try {
      const words = await this.getWordsRepository.getWords();

      return ok<Word[]>(words);
    } catch (error) {
      return serverError();
    }
  }
}
