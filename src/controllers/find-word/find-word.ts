import { Word } from "../../models/word";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IFindWordRepository } from "./protocols";

export class FindWordController implements IController {
  constructor(private readonly findWordRepository: IFindWordRepository) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Word>> {
    try {
      const wordName = httpRequest?.params?.word;

      if (!wordName) {
        return {
          statusCode: 400,
          body: "Missing word name",
        };
      }

      const word = await this.findWordRepository.findWord(wordName);

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
