export interface IHero {
  _id: string;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string[];
  catch_phrase: string;
  images: string[];
}

export interface HeroData {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  [key: string]: string;
}

export type HeroResponse = {
  totalHeroes: number;
  heroes: IHero[];
};
