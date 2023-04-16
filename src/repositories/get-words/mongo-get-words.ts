import { IGetWordsRepository } from "../../controllers/get-words/protocols";
import { Word } from "../../models/word";

export class MongoGetWordsRepository implements IGetWordsRepository {
  async getWords(): Promise<Word[]> {
    return [
      {
        word: "apple",
        definition: "a round fruit with red or green skin and firm white flesh",
        examples: [
          "I had an apple for breakfast.",
          "She baked an apple pie for dessert.",
          "The teacher used an apple to explain gravity.",
        ],
        synonyms: ["fruit", "pomaceous fruit", "edible fruit"],
        antonyms: ["orange", "banana"],
        translations: {
          pt: "maçã",
        },
      },
    ];
  }
}
