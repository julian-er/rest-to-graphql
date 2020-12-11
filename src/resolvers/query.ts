import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers = {
  Query: {
    //dataSources from server.ts , acces to declared seasons and then to function defined in data-seasons.ts
    async SeasonsList(_: void, __: any, { dataSources }) {
      return await dataSources.seasons.getSeasons().then(
        // this structure came from data in API REST
        (data: any) => {
          return data.MRData.SeasonTable.Seasons;
        }
      );
    },
    //dataSources from server.ts , acces to declared races and then to function defined in data-seasons.ts
    async RacesByYear(_: void, { year }, { dataSources }) {
      return await dataSources.races.getYear(year).then(
        // this structure came from data in API REST
        (data: any) => {
          return data.MRData.RaceTable.Races;
        }
      );
    },
    //dataSources from server.ts , acces to declared races and then to function defined in data-seasons.ts
    async RaceSelect(_: void, { year, round }, { dataSources }) {
        return await dataSources.races.getYearRound(year, round).then(
          // this structure came from data in API REST
          (data: any) => {
            return data;
          }
        );
      },
    //dataSources from server.ts , acces to declared seasons and then to function defined in data-seasons.ts
    async HistoryDrivers(_: void, { pageElement, page }, { dataSources }) {
        return await dataSources.drivers.getDrivers(pageElement, page).then(
          // this structure came from data in API REST
          (data: any) => {
            return data.MRData.DriverTable.Drivers;
          }
        );
      },
    //dataSources from server.ts , acces to declared seasons and then to function defined in data-seasons.ts
    async DriversByYear(_: void, { year }, { dataSources }) {
        return await dataSources.drivers.getDriversByYear(year).then(
          // this structure came from data in API REST
          (data: any) => {
            return data.MRData.DriverTable.Drivers;
          }
        );
      },
    //dataSources from server.ts , acces to declared seasons and then to function defined in data-seasons.ts
    async DriversByYearAndRound (_: void, { year, round }, { dataSources }) {
        return await dataSources.drivers.getDriversByYearAndRound(year,round).then(
          // this structure came from data in API REST
          (data: any) => {
            return data.MRData.DriverTable.Drivers;
          }
        );
      },  
      
},
};

export default resolvers;
