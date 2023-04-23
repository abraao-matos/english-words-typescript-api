import { Word } from "../../models/word";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateWordRepository, UpdateUserParams } from "./protocols";

export class UpdateWordController implements IController {
  constructor(private readonly updateWordRepository: IUpdateWordRepository) {}
  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HttpResponse<Word | string>> {
    try {
      const wordName = httpRequest?.params?.word;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Missing fields");
      }

      if (!wordName) {
        return badRequest("Missing word");
      }

      const word = await this.updateWordRepository.updateWord(wordName, body);

      return ok<Word>(word);
    } catch (error) {
      return serverError();
    }
  }
}
