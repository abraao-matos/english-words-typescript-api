import { Word } from "../../models/word";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateWordRepository, UpdateUserParams } from "./protocols";

export class UpdateWordController implements IController {
  constructor(private readonly updateWordRepository: IUpdateWordRepository) {}
  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HttpResponse<Word>> {
    try {
      const wordName = httpRequest?.params?.word;
      const body = httpRequest?.body;

      if (!body) {
        return {
          statusCode: 400,
          body: "Missing fields",
        };
      }

      if (!wordName) {
        return {
          statusCode: 400,
          body: "Missing word",
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
