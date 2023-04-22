export interface Word {
  word: string;
  definition: string;
  examples: string[];
  synonyms?: string[];
  translations: {
    [key: string]: string;
  };
}
