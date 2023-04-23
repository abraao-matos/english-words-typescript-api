import { Word } from "../../models/word";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IFindWordRepository } from "./protocols";

export class FindWordController implements IController {
  constructor(private readonly findWordRepository: IFindWordRepository) {}

  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Word | string>> {
    try {
      const wordName = httpRequest?.params?.word;

      if (!wordName) {
        return badRequest("Missing word");
      }

      const word = await this.findWordRepository.findWord(wordName);

      return ok<Word>(word);
    } catch (error) {
      return serverError();
    }
  }
}
