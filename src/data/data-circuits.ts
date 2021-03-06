import { F1 } from './data-source';

export class CircuitsData extends F1 {
  constructor() {
    super();
  }

// Access to seasons in API REST, only need the path. Base path URL already exists in data-source.ts (F1 class)
async getCircuits(pageElement: number = -1, page: number = -1) {
    if (pageElement === -1) {
      return await this.get('/circuits.json?limit=1000', {
        //Add cache for an hour
        cacheOptions: { ttl: 60 },
      });
    }
    const offset = (page - 1) * pageElement;
    const limit = pageElement;
    const filter = `limit=${limit}&offset=${offset}`;
    return await this.get(`/circuits.json?${filter}`, {
      //Add cache for an hour
      cacheOptions: { ttl: 60 },
    });
  }
  // Access to seasons in API REST, only need the path. Base path URL already exists in data-source.ts (F1 class)
  async getCircuitsById(id: string) {
    return await this.get(`/circuits/${id}.json`, {
      //Add cache for an hour
      cacheOptions: { ttl: 60 },
    });
  }
}
