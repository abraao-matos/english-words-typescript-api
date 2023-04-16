export interface Word {
  word: string;
  definition: string;
  examples: string[];
  synonyms?: string[];
  antonyms?: string[];
  translations: {
    [key: string]: string;
  };
}
