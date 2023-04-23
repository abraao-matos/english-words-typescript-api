import { Word } from "../../models/word";
import { badRequest, conflict, created, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreateWordParams, ICreateWordRepository } from "./protocols";

export class CreateWordController implements IController {
  constructor(private readonly createWordRepository: ICreateWordRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateWordParams>
  ): Promise<HttpResponse<Word | string>> {
    try {
      const requiredFields = ["word", "definition", "examples"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateWordParams]?.length) {
          return badRequest(`Field ${field} as required`);
        }
      }

      const { word } = httpRequest.body!;
      const existingWord = await this.createWordRepository.findWordByName(word);

      if (existingWord) {
        return conflict(`Word '${word}' already exists`);
      }

      const createdWord = await this.createWordRepository.createWord(
        httpRequest.body!
      );

      return created<Word>(createdWord);
    } catch (error) {
      return serverError();
    }
  }
}
