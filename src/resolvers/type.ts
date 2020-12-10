import { IResolvers } from 'graphql-tools';

const type: IResolvers = {
  Season:{
    //resolve names, in API REST, is a season. Here I want to name this with year word
      year: parent => parent.season,
    //resolve urlMobile with url mobile
      urlMobile: parent => parent.url
  }
};

export default type;
