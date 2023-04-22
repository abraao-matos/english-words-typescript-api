import { Word } from "../../models/word";
import { HttpRequest, HttpResponse } from "../protocols";
import { IUpdateWordController, IUpdateWordRepository } from "./protocols";

export class UpdateWordController implements IUpdateWordController {
  constructor(private readonly updateWordRepository: IUpdateWordRepository) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Word>> {
    try {
      const wordName = httpRequest?.params?.word;
      const body = httpRequest?.body;

      if (!wordName) {
        return {
          statusCode: 400,
          body: "Missing word name",
        };
      }

      const word = await this.updateWordRepository.updateWord(wordName, body);

      return {
        statusCode: 200,
        body: word,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
