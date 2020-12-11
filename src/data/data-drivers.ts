import { F1 } from './data-source';

export class DriversData extends F1 {
  constructor() {
    super();
  }

// Access to seasons in API REST, only need the path. Base path URL already exists in data-source.ts (F1 class)
  async getDrivers(pageElement:number = -1, page: number =-1) {
      if (pageElement === -1){
        return await this.get('/drivers.json?limit=1000', {
            //Add cache for an hour
            cacheOptions: { ttl:60 }
        });
      }
      const offset = (page - 1) * pageElement;
      const limit = pageElement;
      const filter = `limit=${limit}&offset=${offset}`
      return await this.get(`/drivers.json?${filter}`, {
        //Add cache for an hour
        cacheOptions: { ttl:60 }
    });
  }
}
