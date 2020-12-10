import { F1 } from './data-source';

export class RacesData extends F1 {
  constructor() {
    super();
  }

// Access to seasons in API REST, only need the path. Base path URL already exists in data-source.ts (F1 class)
  async getYear(year:string) {
      const currentYear = new Date().getFullYear();
      // if the value of year isn't valid set currentYear
      (isNaN(+year) || +year < 1950 || +year > currentYear) ? year = String(currentYear) : year = year ;
      return await this.get(`${year}.json`, {
          //Add cache for an hour
          cacheOptions: { ttl:60 }
      });
  }
}
