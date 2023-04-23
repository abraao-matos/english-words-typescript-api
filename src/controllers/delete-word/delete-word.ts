import { Word } from "../../models/word";
import { HttpRequest, HttpResponse } from "../protocols";
import { IDeleteWordController, IDeleteWordRepository } from "./protocols";

export class DeleteWordController implements IDeleteWordController {
  constructor(private readonly deleteWordRepository: IDeleteWordRepository) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Word>> {
    try {
      const wordName = httpRequest?.params?.word;

      if (!wordName) {
        return {
          statusCode: 400,
          body: "Messing word",
        };
      }

      const word = await this.deleteWordRepository.deleteWord(wordName);

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
