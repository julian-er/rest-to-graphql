import { F1 } from './data-source';

export class DriversData extends F1 {
  constructor() {
    super();
  }

// Access to seasons in API REST, only need the path. Base path URL already exists in data-source.ts (F1 class)
  async getDrivers() {
      return await this.get('/drivers.json?limit=1000', {
          //Add cache for an hour
          cacheOptions: { ttl:60 }
      });
  }
}
