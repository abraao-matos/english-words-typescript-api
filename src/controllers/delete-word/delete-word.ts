import { Word } from "../../models/word";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeleteWordRepository } from "./protocols";

export class DeleteWordController implements IController {
  constructor(private readonly deleteWordRepository: IDeleteWordRepository) {}

  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Word | string>> {
    try {
      const wordName = httpRequest?.params?.word;

      if (!wordName) {
        return badRequest("Messing word");
      }

      const word = await this.deleteWordRepository.deleteWord(wordName);

      return ok<Word>(word);
    } catch (error) {
      return serverError();
    }
  }
}
