import { Character } from "./characters";
  
  export interface APIResponse {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Character[];
}