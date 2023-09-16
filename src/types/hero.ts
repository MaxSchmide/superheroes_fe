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

export interface PartialHero {
  _id: string;
  nickname: string;
  image: string;
}

export interface HeroResponse {
  totalHeroes: number;
  heroes: PartialHero[];
}
