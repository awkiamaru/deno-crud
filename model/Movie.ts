import { Director } from "./Director.ts";

export interface Movie {
    id: string;
    directed: string;
    produced: Array<Director>;
    title: string;
  }