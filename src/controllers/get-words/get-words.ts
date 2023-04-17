import { IGetWordsController, IGetWordsRepository } from "./protocols";

export class GetWordsController implements IGetWordsController {
  constructor(private readonly getWordsRepository: IGetWordsRepository) {}
  async handle() {
    try {
      const words = await this.getWordsRepository.getWords();

      return {
        statusCode: 200,
        body: words,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
