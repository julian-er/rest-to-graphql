import { roundCheck, yearHandler } from '../lib/utils';
import { F1 } from './data-source';

export class RacesData extends F1 {
  constructor() {
    super();
  }

  // Access to seasons in API REST, only need the path. Base path URL already exists in data-source.ts (F1 class)
  async getYear(year: string) {
    year = yearHandler(year);
    return await this.get(`${year}.json`, {
      //Add cache for an hour
      cacheOptions: { ttl: 60 },
    });
  }
  // Access to seasons in API REST, only need the path. Base path URL already exists in data-source.ts (F1 class)
  async getYearRound(year: string, round: number) {
    year = yearHandler(year);
    round = roundCheck(round);
    return await this.get(`${year}/${round}.json`, {
      //Add cache for an hour
      cacheOptions: { ttl: 60 },
    });
  }
}
