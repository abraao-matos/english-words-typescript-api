import { Word } from "../../models/word";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateWordParams,
  ICreateWordController,
  ICreateWordRepository,
} from "./protocols";

export class CreateWordController implements ICreateWordController {
  constructor(private readonly createWordRepository: ICreateWordRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateWordParams>
  ): Promise<HttpResponse<Word>> {
    try {
      const requiredFields = ["word", "definition", "examples"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateWordParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} as required`,
          };
        }
      }

      const { word } = httpRequest.body!;
      const existingWord = await this.createWordRepository.findWordByName(word);

      if (existingWord) {
        return {
          statusCode: 409,
          body: `Word '${word}' already exists`,
        };
      }

      const createdWord = await this.createWordRepository.createWord(
        httpRequest.body!
      );

      return {
        statusCode: 201,
        body: createdWord,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong",
      };
    }
  }
}
