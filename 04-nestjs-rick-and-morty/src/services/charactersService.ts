import { Character } from '@/types/characters';
import { APIResponse } from '@/types/getCharacters';

const fetchAllCharacters = async (baseUrl: string): Promise<Character[]> => {
  let results: Character[] = [];
  let nextUrl: string | null = baseUrl;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data: APIResponse = await response.json();
    results = results.concat(data.results);
    nextUrl = data.info.next;
  }

  return results;
};

export { fetchAllCharacters };
