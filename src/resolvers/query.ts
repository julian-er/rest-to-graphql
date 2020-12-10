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
  },
};

export default resolvers;
